import mongoose from "mongoose";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken"
import User, { validate } from './../models/userModel.js';
export const signUp = async(req,res)=>{
    const {username,email,password} = req.body
     const {error} = validate(req.body);
     if(error) return res.status(400).send(error.message);

    try{
        const existUser = await User.findOne({email})
        if(existUser) return res.status(400).json({message: 'User already exists'})
        const salt = await bycrypt.genSalt(2);
        const hashedPass = await bycrypt.hash(password,salt);

        const newUser = new User({username,email,password:hashedPass});
        const createdUser = await newUser.save();

        const token = jwt.sign({id: createdUser._id},
            process.env.JWTSCRT,
            {expiresIn: '3h'}
            );

        res.status(201).json({createdUser,token})

    }catch(error){
        res.status(404).json(error.response)
    }
}
export const signIn = async(req,res)=>{

    const {email, password} = req.body
    console.log(password)
    try{
        const userExist = await User.findOne({email});
        const passCorrect = await bycrypt.compare(password,userExist.password);
        if(userExist&& passCorrect){
            const token = jwt.sign({id: userExist._id},
                process.env.JWTSCRT,
                {expiresIn: '3h'})
                res.status(200).json({userExist,token})
        }else{
            res.status(404).json({message: 'invalid email or password'})
        }
    }catch(error){
        res.status(404).json(error.message)
    }
}
