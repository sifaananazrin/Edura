const Teacher = require('../model/Teacher');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const signup = async (req, res, next) => {
    const { name, email, password, qualification } = req.body;
  
    let existingTeacher;
    try {
      existingTeacher = await Teacher.findOne({ email: email });
    } catch (err) {
      console.log(err);
    }
  
    if (existingTeacher) {
      return res
        .status(400)
        .json({ message: 'Teacher already exists! Login Instead' });
    }
  
    const hashPassword = bcrypt.hashSync(String(password));

  
    const teacher = new Teacher({
      name,
      email,
      password: hashPassword,
      qualification,
    });
  
    try {
      await teacher.save();
    } catch (err) {
      console.log(err);
    }
  
    return res.status(201).json({ message: teacher });
  };

  
  //login
  const login = async (req, res, next) => {
    const { email, password } = req.body;
  
    let existingTeacher;
    try {
      existingTeacher = await Teacher.findOne({ email: email });
    } catch (err) {
      return new Error(err);
    }
  
    if (!existingTeacher) {
      return res
        .status(400)
        .json({ message: 'Teacher not found. Signup please' });
    }
  
    const isPasswordCorrect = bcrypt.compareSync(
      password,
      existingTeacher.password
    );
  
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid Email/Password' });
    }
  
    const token = jwt.sign(
      { id: existingTeacher._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: '35s',
      }
    );
  
  
    res.cookie(String(existingTeacher._id), token, {
      path: '/',
      expires: new Date(Date.now() + 1000 * 30),
      httpOnly: true,
      sameSite: 'lax',
    });
  
    res
      .status(200)
      .json({ message: 'Successfully Logged In', teacher: existingTeacher, token });
  };

  
  exports.signup = signup;
exports.login = login;
