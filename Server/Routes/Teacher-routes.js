const express = require('express');
const router = express.Router();
// const teacherController = require('../Controllers/Teacher-controller');

// router.post('/TeachSignup', teacherController.signup);
// router.post('/TeachLogin', teacherController.login);

const { signup, login ,addCourse,getAllCourse } = require('../Controllers/Teacher-controller');

// Use the functions in your application
router.post('/signup', signup);
router.post('/login', login);

router.post('/addcourse',addCourse);
router.get('/courses',getAllCourse);

module.exports = router;
