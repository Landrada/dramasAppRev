import mongoose from "mongoose";
import Joi from 'joi';
import { registerSchema} from 'swaggiffy';
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    
})
const User = mongoose.model('User',userSchema)
registerSchema('User', userSchema, { orm: 'mongoose' });
export default User;
export const validate= (user)=>{
     const schema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
     });
     return schema.validate(user)
}