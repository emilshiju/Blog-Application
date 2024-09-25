import express from "express"

import router from "./routes.js"

import cors from "cors";
import connectToMongo from "./config.js";

import dotenv from 'dotenv';

const app=express()



// Load environment variables from .env file
dotenv.config();



connectToMongo(()=>{
    console.log("connected succesfully mongo")
})


const allowedOrigins = [
    "http://localhost:5173",
    
  ];
  const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true); // Allow the request
      } else {
        callback(new Error("Not allowed by CORS")); // Block the request
      }
    },
    credentials: true,
  };
  
  app.use(cors(corsOptions));
  
app.use(express.json());

app.use(router)



app.listen(3000)


