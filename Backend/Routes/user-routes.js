const express = require('express');
const { 
    signup,
    login,
     verifyTocken,
     getUser,
     refreshToken,
     PostOtp
     } = require('../Controllers/User-controller');

const router = express.Router();

// router.get('/',(req,res,next)=>{
//     res.send("hello world")
// })
router.post("/signup",signup)
router.post("/login",login)
router.get("/user",verifyTocken,getUser)
router.get("/refresh",refreshToken,verifyTocken,getUser)
router.post("/verify-otp",PostOtp)



module.exports=router