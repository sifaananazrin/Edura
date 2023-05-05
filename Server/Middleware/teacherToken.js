const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const Teacher = require("../model/Teacher");

dotenv.config();

const validateTeacherToken = async(req, res, next) => {
  const token = req.header('Authorization');

  if (token === 'Bearer null') {
    return res.status(401).send('Access Denied. No token provided.');
  }

  try {
    // eslint-disable-next-line no-unused-vars
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const  status=await Teacher.findById(decoded.teacherId)
    // console.log(decoded)
    
    if (decoded.accountType === 'teacher' && status.IsBlock == "Active") {
      return next();
    }
    throw new Error();
  } catch (error) {
     res.status(403).send('Invalid Token.');
  }
};

module.exports = validateTeacherToken;
