import mongoose from "mongoose";
import { registerSchema} from 'swaggiffy';
const dramaSchema = mongoose.Schema({
    title: String,
    mainActor: String,
    mainActress: String,
    
})
const Drama = mongoose.model('Drama',dramaSchema)
registerSchema('Drama', dramaSchema, { orm: 'mongoose' });
export default Drama;