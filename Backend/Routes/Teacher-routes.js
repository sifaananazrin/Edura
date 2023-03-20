const express = require('express');
const router = express.Router();
// const teacherController = require('../Controllers/Teacher-controller');

// router.post('/TeachSignup', teacherController.signup);
// router.post('/TeachLogin', teacherController.login);

const { signup, login } = require('../Controllers/Teacher-controller');

// Use the functions in your application
router.post('/TeachSignup', signup);
router.post('/TeachLogin', login);

module.exports = router;
