const Teacher = require("../model/Teacher");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const Category = require("../model/Category");
const Course = require("../model/Course");
const Booking = require("../model/Booking");
const Quiz = require("../model/Quiz");
const dotenv = require("dotenv");

dotenv.config();

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
      .json({ message: "Teacher already exists! Login Instead" });
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
    const found = await Teacher.findOne({ email, IsBlock: "Active" });

    // Check if teacher exists and is approved
    if (found && found.status === "Approve") {
      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, found.password);

      if (isPasswordValid) {
        // Create JWT token
        const token = jwt.sign(
          { email: found.email, teacherId: found._id, accountType: "teacher" },
          process.env.JWT_SECRET_KEY
        );
        res.send({
          success: true,
          message: "Login successful",
          token,
          tid: found._id,
          name: found.name,
        });
      } else {
        res.send({ success: false, message: "Invalid email or password" });
      }
    } else {
      res.send({
        success: false,
        message: "Teacher not approved or does not exist",
      });
    }
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.send({ success: true, categories });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

const addCourse = (req, res) => {
  const { name, category, description, link, price, teachername, token } =
    req.body;
  const list = JSON.parse(req.body.list);
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  const teacherid = decoded.teacherId;
  Course.findOne({ name: name })
    .then((existingCourse) => {
      if (existingCourse) {
        // A course with the same name already exists
        return res
          .status(400)
          .json({ error: "A course with the same name already exists." });
      }

      // Create a new course if one does not already exist
      // const chapters = [];
      const newCourse = new Course({
        name,
        category,
        teachername,
        description,
        link,
        price,
        list,
        teacherid,
      });

      if (req.files && req.files.length > 0) {
        newCourse.image = req.files.map((f) => ({
          url: f.path,
          filename: f.filename,
        }));
      }

      newCourse
        .save()
        .then((course) => {
          res.json({ course, success: true });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).json({ error: "Failed to create course." });
        });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Failed to check for existing courses." });
    });
};

const getAllCourse = async (req, res) => {
  try {
    const { teacherid } = req.query;
    const course = await Course.find({ teacherid });

    res.send({ success: true, course });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

const getEditCourse = async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  const course = await Course.findOne({ _id: id });
  res.send({ course });
};

const postEditCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, category, description, link, price, teachername, teacherid } =
      req.body;
    const chapters = [];
    const course = await Course.updateOne(
      { _id: id },
      {
        name,
        category,
        teachername,
        description,
        price,
        link,
        chapters,
        teacherid,
      }
    );
    if (course) {
      res.send({ message: " updated" });
    } else {
      res.send({ success: false });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const getEditExam = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const quiz = await Quiz.findOne({ _id: id });
    console.log(quiz);
    res.send({ quiz });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

const EditExam = async (req, res) => {
  try {
    console.log("hloooooooo")
    const { id } = req.params;
    console.log(id);
    console.log(req.body);

    const updatedQuiz = await Quiz.findByIdAndUpdate(id, { ...req.body });
    console.log(updatedQuiz);

    res.status(200).send({ message: "updated" });

    // Create new exam if it doesn't exist
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Unable to add exam" });
  }
};

const getDeleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await Course.deleteOne({ _id: id }).then(() => {
      res.send({ message: " data delected" });
    });
  } catch (error) {
    console.log(error.message);
  }
};

const getAllStudents = async (req, res) => {
  try {
    const { teacherid } = req.query;
    // console.log(teacherid)
    // Find all the bookings made by the teacher
    const bookings = await Booking.find({ teacherid });

    // Extract the user IDs from the bookings
    const userIds = bookings.map((booking) => booking.user_id);

    // Find all the users who made bookings with the teacher
    const users = await User.find({ _id: { $in: userIds } });

    res.send({ success: true, students: users, course: bookings });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

const addExam = async (req, res) => {
  try {
    const { courseId, question, a, b, c, d, correct } = req.body;
    console.log(req.body);
    // Check if exam with same courseId already exists
    const quizzcount = await Quiz.countDocuments({ courseId });
    // const quizzcount="10"
    if (quizzcount <= 10) {
      console.log(quizzcount);
      const newExam = new Quiz({
        courseId,
        question,
        a,
        b,
        c,
        d,
        correct,
      });

      await newExam.save();
      await Course.findByIdAndUpdate(courseId, {
        quizz: "added",
      });

      return res
        .status(201)
        .json({ message: ` ${quizzcount + 1} Question  added successfully` });
    } else {
      return res.status(200).json({ message: "You have added 10 questions" });
    }
    // Create new exam if it doesn't exist
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Unable to add exam" });
  }
};

const getQuestions = async (req, res) => {
  try {
    const { courseId } = req.query;
    const found = await Quiz.find({ courseId });
    if (found.length > 0) {
      res.send({ found });
    } else {
      res.send({ message: "No exams found for this course" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ error: "Internal server error" });
  }
};

const DeleteQuestions = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await Quiz.deleteOne({ _id: id }).then(() => {
      res.send({ message: " data delected" });
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getAllCourse = getAllCourse;
exports.addCourse = addCourse;
exports.signup = signup;
exports.login = login;
exports.getAllCategories = getAllCategories;
exports.getEditCourse = getEditCourse;
exports.postEditCourse = postEditCourse;
exports.getAllStudents = getAllStudents;
exports.getDeleteCourse = getDeleteCourse;
exports.addExam = addExam;
exports.getQuestions = getQuestions;
exports.DeleteQuestions = DeleteQuestions;
exports.getEditExam = getEditExam;
exports.EditExam = EditExam;
