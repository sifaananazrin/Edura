const express = require('express');
const mongoose = require('mongoose')
const router = require("./Routes/User-routes")
const teacherRoutes = require('./Routes/Teacher-routes');
const admin=require("./Routes/Admin-router")


const cookieParser =require('cookie-parser')
const cors=require('cors');
require('dotenv').config();

const app=express();
app.use(cors({credentials:true,origin:"http://localhost:3000"}));
app.use(cookieParser());

app.use(express.json());



app.use('/api',router)
app.use('/teacher', teacherRoutes);
app.use('/admin', admin);
mongoose.connect(`mongodb+srv://e-leaning:${process.env.MONGODB_PASSWORD}@cluster0.gsrjotg.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
 app.listen(5000);
 console.log("Database is connected! Listening to localhost 5000 ") 
}).catch((err)=>{
  console.log(err)
})




