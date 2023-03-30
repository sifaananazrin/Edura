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
  const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find teacher with matching email
      const found = await Teacher.findOne({ email });
  
      // Check if teacher exists and is approved
      if (found && found.status === 'Approve') {
        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, found.password);
  
        if (isPasswordValid) {
          // Create JWT token
          const token = jwt.sign(
            { email: found.email, teacherId: found._id, accountType: 'teacher' },
            process.env.JWT_SECRET_KEY
          );
          res.send({ success: true, message: 'Login successful', token });
        } else {
          res.send({ success: false, message: 'Invalid email or password' });
        }
      } else {
        res.send({ success: false, message: 'Teacher not approved or does not exist' });
      }
    } catch (error) {
      res.send({ success: false, message: error.message });
    }
  };
  

  
  const addCourse= (req, res) => {
    const { name, description, image, link } = req.body;
    const chapters = [];
  
    const newCourse = new Course({
      name,
      description,
      image,
      link,
      chapters
    });
  
    newCourse.save()
      .then(course => {
        res.json(course);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Failed to create course.' });
      });
  };

  const getAllCourse = async (req, res) => {
    try {
      const course = await Course.find();
      res.send({ success: true, course });
    } catch (error) {
      res.send({ success: false, message: error.message });
    }
  };




  
  exports.getAllCourse=getAllCourse;
  exports.addCourse=addCourse;
  exports.signup = signup;
exports.login = login;
