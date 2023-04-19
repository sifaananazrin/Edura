const express = require('express');
const controller = require('../Controllers/Admin-controller');
const validateAdminToken = require('../Middleware/adminToken');
// const tokenMiddleware = require('../Middleware/token');
const router = express.Router();

router.post('/login', controller.adminLogin);
router.get('/users', validateAdminToken, controller.getAllusers);
router.get('/status/:id',validateAdminToken, controller.blockUnblockUser);
router.get('/getteacher', validateAdminToken, controller.getAllTeacher);
router.get('/approve/:id', validateAdminToken, controller.approveTeacher);
router.get('/editecategory/:id', validateAdminToken, controller.getEditCategory);
router.post('/addcategory',validateAdminToken, controller.addCategory);
router.get('/category', validateAdminToken, controller.getAdminCategory);
router.put('/editcategory/:id',validateAdminToken, controller.postEditCategory);
router.get('/delectcategory/:id',validateAdminToken, controller.getDeleteCategory)
router.get('/students',validateAdminToken, controller.getDashboard)


module.exports = router;