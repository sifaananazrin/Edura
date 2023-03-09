const express = require('express');
const mongoose = require('mongoose')
const router = require("./Routes/user-routes")
const cookieParser =require('cookie-parser')
const cors=require('cors');
require('dotenv').config();

const app=express();
app.use(cors({credentials:true,origin:"http://localhost:3000"}));
app.use(cookieParser());
// now we can use the cokkie parser in our application
app.use(express.json());



app.use('/api',router)
mongoose.connect(`mongodb+srv://e-leaning:${process.env.MONGODB_PASSWORD}@cluster0.gsrjotg.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
 app.listen(5000);
 console.log("Database is connected! Listening to localhost 5000 ") 
}).catch((err)=>{
  console.log(err)
})




