const express = require('express');
const router = express.Router();
// const teacherController = require('../Controllers/Teacher-controller');
const multer  = require('multer')
// router.post('/TeachSignup', teacherController.signup);
// router.post('/TeachLogin', teacherController.login);

const { signup, login ,addCourse,getAllCourse,getAllCategories,getEditCourse,postEditCourse,getDeleteCourse } = require('../Controllers/Teacher-controller');


const { storage } = require('../Middleware/cloudinary');
const validateTeacherToken = require("../Middleware/teacherToken")

const upload = multer({ storage })
// Use the functions in your application
router.post('/signup', signup);
router.post('/login', login);

router.post('/addcourse',upload.array('image', 4),addCourse);
router.get('/courses',getAllCourse);
router.get('/categories',getAllCategories);


//coures 
router.get('/editcoures/:id', getEditCourse);
router.put('/editcoure/:id', postEditCourse);
router.get('/delectcoures/:id',getDeleteCourse)

module.exports = router;
