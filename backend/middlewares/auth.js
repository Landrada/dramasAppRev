import jwt from 'jsonwebtoken';
import User from './../models/userModel.js';

export const auth = async (req,res,next)=>{
    console.log(req.headers.authorization)
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            const token = req.headers.authorization.split(" ")[1]
            const decodedData = jwt.verify(token, process.env.JWTSCRT);
            req.user = await User.findById(decodedData?.id);
            next();
        } catch (error) {
            res.json(error.message)
        }
    }else{
        res.status(404).json({message: 'Unauthorized'})
    }
}