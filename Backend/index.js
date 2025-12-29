// const express = require('express'); // ES6 k pehele ka syntax hai
// const dontenv = require('dotenv');
// cloud mongo - atlas (no nee for newuri and useunife)

import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express()

app.use(cors());
app.use(express.json()) // body jho data bhej rahe hain usko json mein parse karega


const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
// connnect to mongoDB server

try{
  mongoose.connect(URI);
  console.log("Connected to mongoDB successfully");
} catch(error){
  console.log("Error: ", error);
}

// defining routes

app.use("/book", bookRoute)
app.use("/user", userRoute)

app.listen(PORT, () => {
  console.log(`Server is  listening on port ${PORT}`)
})
