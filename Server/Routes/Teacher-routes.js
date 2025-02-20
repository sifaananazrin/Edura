const express = require("express");
const router = express.Router();
// const teacherController = require('../Controllers/Teacher-controller');
const multer = require("multer");
// router.post('/TeachSignup', teacherController.signup);
// router.post('/TeachLogin', teacherController.login);

const {
  signup,
  login,
  addCourse,
  getAllCourse,
  getAllCategories,
  getEditCourse,
  postEditCourse,
  getDeleteCourse,
  getAllStudents,
  addExam,
  getQuestions,
  DeleteQuestions,
  getEditExam,
  EditExam,
} = require("../Controllers/Teacher-controller");

const { storage } = require("../Middleware/cloudinary");
const validateTeacherToken = require("../Middleware/teacherToken");

const upload = multer({ storage });
// Use the functions in your application
router.post("/signup", signup);
router.post("/login", login);

router.post(
  "/addcourse",
  validateTeacherToken,
  upload.array("image", 4),
  addCourse
);
router.get("/courses", validateTeacherToken, getAllCourse);
router.get("/categories", validateTeacherToken, getAllCategories);

//coures
router.get("/editcoures/:id", getEditCourse);
router.put("/editcoure/:id", validateTeacherToken, postEditCourse);
router.get("/delectcoures/:id", validateTeacherToken, getDeleteCourse);
router.get("/getallusers", validateTeacherToken, getAllStudents);
router.post("/exam", addExam);
router.get("/getexam", validateTeacherToken, getQuestions);
router.get("/editexam/:id", getEditExam);
router.put("/editexamdata/:id", validateTeacherToken, EditExam);
router.get("/delectquestions/:id", validateTeacherToken, DeleteQuestions);
module.exports = router;
