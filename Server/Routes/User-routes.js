const express = require('express');
const { 
    signup,
    login,
     verifyTocken,
     getUser,
     refreshToken,
     PostOtp,
    //  logout,
     getAllCourse,
     confirmOrder,
     verifyPayment,
     paymentFailure,
     getProductDetail,
     getAllCount
     } = require('../Controllers/User-controller');

const router = express.Router();

// router.get('/',(req,res,next)=>{
//     res.send("hello world")
// })
router.post("/signup",signup)
router.post("/login",login)
// router.get("/user",verifyTocken,getUser)
router.get("/refresh",refreshToken,verifyTocken,getUser)
router.post("/verify-otp",PostOtp)
router.get("/course",getAllCourse)
router.post('/orderConfirmed',confirmOrder);
router.post('/verifyPayment',verifyPayment);
router.get('/paymentFail',paymentFailure);
router.get("/product/:id", getProductDetail);
router.get("/totalcounts", getAllCount);


// router.post("/logout",verifyTocken,logout)



module.exports=router