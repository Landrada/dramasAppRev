import db from './models/mongodb.js'
import express from 'express';
import dramaRouter from './routes/dramaRoutes.js';
import dotenv from 'dotenv';
import { Swaggiffy } from 'swaggiffy';
import cors from 'cors'
import userRouter from './routes/userRoute.js'
const app = express();
dotenv.config()
app.use(express.json())
app.use(cors());
new Swaggiffy().setupExpress(app).swaggiffy();
app.get('/',(req,res)=>{
    res.send('Bienvenue');
});
app.use('/drama',dramaRouter);
app.use('/user', userRouter)
const port = process.env.PORT|| 3000 ;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});

