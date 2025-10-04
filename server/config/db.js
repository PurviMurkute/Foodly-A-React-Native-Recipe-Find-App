import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL);

    if(conn){
        console.log("MongoDB Connected");
    }else{
        console.log("MongoDB not Connected");
    }
}

export default connectDB;