const express = require('express');
const controller = require('../Controllers/Admin-controller');
const validateAdminToken = require('../Middleware/adminToken');
// const tokenMiddleware = require('../Middleware/token');
const router = express.Router();

router.post('/login', controller.adminLogin);
router.get('/users', validateAdminToken, controller.getAllusers);
router.get('/status/:id', controller.blockUnblockUser);

module.exports = router;