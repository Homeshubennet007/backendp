import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODBURI}/${DB_NAME}`)
       console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error("MongoDB connection error",error);
        process.exit(1)
    }
}

export default connectDB