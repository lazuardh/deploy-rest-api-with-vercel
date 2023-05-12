var express = require('express');
var router = express.Router();
const verifyToken = require('../middleware/verify_token');
const userControllers = require('../controller/userController');

/* GET users listing. */
router.get('/auth',verifyToken, userControllers.getAllUsers);

module.exports = router;
