import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const connection = mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log('DB connected'))
.catch(err=>console.log('Failed to connect to the database: ',err.message));

export default connection