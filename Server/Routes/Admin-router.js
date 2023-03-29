const express = require('express');
const controller = require('../Controllers/Admin-controller');
const validateAdminToken = require('../Middleware/adminToken');
// const tokenMiddleware = require('../Middleware/token');
const router = express.Router();

router.post('/login', controller.adminLogin);
router.get('/users', validateAdminToken, controller.getAllusers);
router.get('/status/:id', controller.blockUnblockUser);
router.get('/getteacher', validateAdminToken, controller.getAllTeacher);
router.get('/approve/:id', validateAdminToken, controller.approveTeacher);

module.exports = router;