import mongoose from "mongoose";
const dramaSchema = mongoose.Schema({
    title: String,
    mainActor: String,
    mainActress: String,
    
})
const Drama = mongoose.model('Drama',dramaSchema)
export default Drama;