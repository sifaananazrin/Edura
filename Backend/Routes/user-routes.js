const express = require('express');
const { 
    signup,
    login,
     verifyTocken,
     getUser,
     refreshToken
     } = require('../Controllers/user-controller');

const router = express.Router();

// router.get('/',(req,res,next)=>{
//     res.send("hello world")
// })
router.post("/signup",signup)
router.post("/login",login)
router.get("/user",verifyTocken,getUser)
router.get("/refresh",refreshToken,verifyTocken,getUser)


module.exports=router