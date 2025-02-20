const express = require('express');
const { 
    signup,
    login,
     getUser,
     refreshToken,
     PostOtp,
     getAllCourse,
     confirmOrder,
     verifyPayment,
     paymentFailure,
     getProductDetail,
     getAllCount,
     getOderDetail,
     getProductDetailData,
     getQuestions,
     updateUser,
     getCourses
     } = require('../Controllers/User-controller');
     const validateUserToken = require("../Middleware/userToken")
const router = express.Router();
router.post("/signup",signup)
router.post("/login",login)
// router.get("/user",verifyTocken,getUser)
// router.get("/refresh",refreshToken,verifyTocken,getUser)
router.post("/verify-otp",PostOtp)
router.get("/course",getAllCourse)
router.post('/orderConfirmed',validateUserToken,confirmOrder);
router.post('/verifyPayment',validateUserToken,verifyPayment);
router.get('/paymentFail',validateUserToken,paymentFailure);
router.get("/product/:id", validateUserToken,getProductDetail);
router.get("/totalcounts",validateUserToken, getAllCount);
router.get("/oderhistory", validateUserToken,getOderDetail);
router.get("/productData", validateUserToken,getProductDetailData);
router.put("/editProfile/:id",updateUser);
router.get("/exam",getQuestions);
router.get("/Courses",getCourses);





module.exports=router