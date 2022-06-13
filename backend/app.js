import db from './models/mongodb.js'
import express from 'express';
import dramaRouter from './routes/dramaRoutes.js';
import dotenv from 'dotenv'
const app = express();
dotenv.config()
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Bienvenue');
});
app.use('/drama',dramaRouter);
const port = process.env.PORT|| 3000 ;
app.listen(port,console.log(`Listening on port ${port}`));

