//require('dotenv').config({path: './env'})
import dotenv from "dotenv"

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path:"./env"
})

connectDB()


















/*
import express from 'express'
const app = express()

;( async () => {
    try {
       await mongoose.connect(`${process.env.MONGODBURI}/${DB_NAME}`)
       app.on("Error",(error) => {
        console.log("ERR:", error);
        throw error
       })

       app.listen(process.env.PORT,() => {
        console.log(`App is listening on port ${process.env.PORT}`)
       })
    } catch (error) {
        console.error("Error",error)
        throw err
    }
} )()
    */