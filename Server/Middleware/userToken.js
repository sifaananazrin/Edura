const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const User = require("../model/User");

dotenv.config();

const validateToken =async (req, res, next) => {
  const token = req.header('Authorization');

  if (token === 'null') {
    return res.status(401).send('Access Denied. No token provided.');
  }

  try {
    // eslint-disable-next-line no-unused-vars
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // console.log(decoded)
    const  isBlock=await User.findById(decoded.id)
          // console.log(isBlock)
    if (decoded.accountType == 'user' && isBlock.status=="Active" ) {
      return next();
    }
    throw new Error();
  } catch (error) {
    res.status(400).send('Invalid Token.');
  }
};

module.exports = validateToken;