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

router.post('/addcategory', controller.postAddCategory);
router.get('/category', controller.getAdminCategory);
router.get('/editcategory/:id', controller.postEditCategory);
router.get('/delectcategory/:id', controller.getDeleteCategory)

module.exports = router;