var express = require('express');
var router = express.Router();
const verifyToken = require('../middleware/verify_token');
const userControllers = require('../controller/userController');

/* GET users listing. */
router.get('/auth',verifyToken, userControllers.getAllUsers);

/*post */
router.get('/:userId',verifyToken, userControllers.getUserById);

//update users
router.put('/:userId',verifyToken, userControllers.updateUser);

//delete
router.delete('/:userId',verifyToken, userControllers.deleteUser);

module.exports = router;
