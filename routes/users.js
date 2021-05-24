var express = require('express');
var router = express.Router();
var userController = require('../controller/userController');

router.post('/register', userController.registerUser);

router.post('/login', userController.login);


module.exports = router;
