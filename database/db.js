import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const USER=process.env.USER;
const PASS=process.env.PASSWORD;

const url=`mongodb+srv://${USER}:${PASS}@whatsapp-clone.ia90hil.mongodb.net/?retryWrites=true&w=majority`
const Connection=async ()=>{
    try{
        await mongoose.connect(url,{useUnifiedTopology:true});
        console.log("database connected...")
    }catch(e){
        console.log("datbase..".error.message);

    }
}

export default Connection;