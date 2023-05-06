const express = require('express');
const { 
    signup,
    login,
    //  verifyTocken,
     getUser,
     refreshToken,
     PostOtp,
    //  logout,
     getAllCourse,
     confirmOrder,
     verifyPayment,
     paymentFailure,
     getProductDetail,
     getAllCount,
     getOderDetail,
     getProductDetailData,
     getAlreadyOder,
     getQuestions
     } = require('../Controllers/User-controller');
     const validateUserToken = require("../Middleware/userToken")
const router = express.Router();

// router.get('/',(req,res,next)=>{
//     res.send("hello world")
// })
router.post("/signup",signup)
router.post("/login",login)
// router.get("/user",verifyTocken,getUser)
// router.get("/refresh",refreshToken,verifyTocken,getUser)
router.post("/verify-otp",PostOtp)
router.get("/course",validateUserToken,getAllCourse)
router.post('/orderConfirmed',validateUserToken,confirmOrder);
router.post('/verifyPayment',validateUserToken,verifyPayment);
router.get('/paymentFail',validateUserToken,paymentFailure);
router.get("/product/:id", validateUserToken,getProductDetail);
router.get("/totalcounts",validateUserToken, getAllCount);
router.get("/oderhistory", validateUserToken,getOderDetail);
router.get("/productData", validateUserToken,getProductDetailData);
router.get("/alreadyoder", validateUserToken,getAlreadyOder);
router.get("/exam",getQuestions);




module.exports=router