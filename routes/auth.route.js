const express = require('express');
const router = express.Router();

const userControls = require('../controllers/auth.controller.js');

/****************************************
| * @desc    : Create user and register
| * @route   : /api/user/register
| * @method  : POST
| * @access  : Public
*****************************************/
router.post('/register', userControls.regester);

/** 
 * @desc    : Login
 * @route   : /api/user/login
 * @method  : POST
 * @access  : Public
**/  
router.post('/login', userControls.login);

/** -----------------------------
 * @desc    : send email
 * @route   : /api/user/sendEmail
 * @method  : POST
 * @access  : Public
---------------------------------**/  
router.post('/send-email', userControls.sendemailc);

/** ---------------------------
 * @desc    : Upload image
 * @route   : /api/user/upim
 * @method  : POST
 * @access  : Public
 ---------------------------**/ 
router.post('/upim', userControls.uploadImage);


module.exports = router;
