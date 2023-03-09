const express = require('express');
const { 
  signup,
  login,
  verifyTocken,
  getUser,
  refreshToken,
  PostOtp
} = require('../Controllers/user-controller');
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", verifyTocken, getUser);
router.get("/refresh", refreshToken, verifyTocken, getUser);
router.post("/verify-otp", PostOtp); // changed the route to match the frontend call

module.exports = router;
