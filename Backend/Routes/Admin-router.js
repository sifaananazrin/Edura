const express = require('express');
const { 
    adminUsersRender,
    
     } = require('../Controllers/Admin-controller');

const router = express.Router();

// router.get('/',(req,res,next)=>{
//     res.send("hello world")
// })
router.get("/getusers",adminUsersRender)


module.exports=router