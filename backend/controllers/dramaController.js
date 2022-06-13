import mongoose from "mongoose";
import Drama from './../models/dramaModel.js';
export const createDrama = async(req,res)=>{
    const drama = req.body;
    try{
        const newDrama = new Drama(drama);
        await newDrama.save();
        res.status(201).json(newDrama)
    }catch(error){
        res.status(404).json(error.response)
    }
}
export const getDramas = async(req,res)=>{
    try{
        const dramas = await Drama.find();
        res.status(200).json(dramas)
    }catch(error){
        res.status(404).json(error.response.data)
    }
}
export const getDrama = async(req,res)=>{
    const id = req.params.id;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).send('No drama with that id')
        }
        const drama = await Drama.findById(id);
        res.status(200).json(drama)
    }catch(error){
        res.status(404).json(error.response);
    }
}
export const deleteDrama = async(req,res)=>{
    const id = req.params.id;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).send('No drama with that id is available')
        }
        await Drama.findByIdAndDelete(id);
        res.status(200).json('Drama successfully deleted')
    }catch(error){
        res.status(404).json(error.response)
    }
}
export const updateDrama = async(req,res)=>{
        const id = req.params.id;
        const updatedDrama = req.body;
        try{
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(404).send('No drama with such id')
            }
            const newDrama = await Drama.findByIdAndUpdate(id,updatedDrama,{new:true});
            res.status(200).json(newDrama);
        }catch(error){
            res.status(404).json(error.response);
        }
}