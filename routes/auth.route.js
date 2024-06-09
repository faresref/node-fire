// const express = require('express')
// const router = express.Router()

// const usercontrolls = require('../controllers/auth.controller.js.js')
// const verifyToken = require('../MIDLLWARE/verfytoken.js');
// const seter = require('../MIDLLWARE/seter.js');
// const seterAdmin = require('../MIDLLWARE/seterAdmin.js');
// const siterpost= require('../MIDLLWARE/siterpost.js');


// /** -----------------------------------
// | * @desc    : get all users         |
// | * @route   : api/user/               |
// | * @methode : get                     |
// | * @access  : public                  |
// -------------------------------------**/
// router.get('/' ,verifyToken , usercontrolls.getAllUsers )

// /**_______________________________
// | * @desc    : get one  user      |
// | * @route   : api/user/:id       |
// | * @methode : get                |
// | * @access  : public             |
// __________________________________|*/
// router.get("/1/:Id",usercontrolls.getUser)




// /****************************************
// *  @desc    : create user and regester  *
// *  @route   : api/user/regester         *
// *  @methode : post                      *
// *  @access  : public                    *
// *****************************************/
// router.post('/regester', usercontrolls.regester)  



// /** 
//  * @desc    : login 
//  * @route   : api/user/login
//  * @methode : post
//  * @access  : public
// **/  
// router.post('/login' , usercontrolls.login);


// /** 
//  * @desc    : post 
//  * @route   : api/user/post
//  * @methode : post
//  * @access  : public
// **/  
// router.post('/upim' , usercontrolls.uploadImage);


// /** 
//  * @desc    : refrech token 
//  * @route   : api/user/refrech
//  * @methode : post
//  * @access  : public dakchi manba3d ok
// **/  
// router.post('/refresh-token',usercontrolls.refreshTokenMiddleware)

// /** 
//  * @desc    : delete user
//  * @route   : api/user/delete/:id
//  * @methode : delete
//  * @access  : public
// **/
//   router.delete('/delete/:Id',verifyToken,seter,usercontrolls.deleteuser)



// /** 
//  * @desc    : apdate user
//  * @route   : api/user/apdite/:id
//  * @methode : put
//  * @access  : public
// **/
// router.put('/apdate/:Id',verifyToken,seter, usercontrolls.apdateuser);


// //route commun
// router.route("/all/:Id").get(verifyToken,seterAdmin,usercontrolls.getUser).put( verifyToken, usercontrolls.apdateuser).delete(verifyToken,usercontrolls.deleteuser)
// //hadchi khas bl ad,in sauf   =>   is admin

// module.exports = router;
/////////////////////////////////////////////////////const express = require('express');const express = require('express');
const express = require('express');
const router = express.Router();

const userControls = require('../controllers/auth.controller.js');  // Ensure this path is correct
const verifyToken = require('../MIDLLWARE/verfytoken');
const seter = require('../MIDLLWARE/seter');
const seterAdmin = require('../MIDLLWARE/seterAdmin');

/** -----------------------------------
| * @desc    : Get all users
| * @route   : /api/user/
| * @method  : GET
| * @access  : Public
-------------------------------------**/
router.get('/', verifyToken, userControls.getAllUsers);

/** _______________________________
| * @desc    : Get one user
| * @route   : /api/user/:id
| * @method  : GET
| * @access  : Public
__________________________________**/
router.get('/1/:Id', userControls.getUser);

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

/** 
 * @desc    : Upload image
 * @route   : /api/user/upim
 * @method  : POST
 * @access  : Public
**/  
router.post('/upim', userControls.uploadImage);

/** 
 * @desc    : Refresh token
 * @route   : /api/user/refresh-token
 * @method  : POST
 * @access  : Public
**/  
router.post('/refresh-token', userControls.refreshTokenMiddleware);

/** 
 * @desc    : Delete user
 * @route   : /api/user/delete/:Id
 * @method  : DELETE
 * @access  : Public
**/
router.delete('/delete/:Id', verifyToken, seter, userControls.deleteuser);

/** 
 * @desc    : Update user
 * @route   : /api/user/update/:Id
 * @method  : PUT
 * @access  : Public
**/
router.put('/update/:Id', verifyToken, seter, userControls.apdateuser);

/** 
 * @desc    : Route combining get, update, and delete for a user
 * @route   : /api/user/all/:Id
 * @method  : GET, PUT, DELETE
 * @access  : Admin for GET, Public for PUT and DELETE
**/
router.route('/all/:Id')
    .get(verifyToken, seterAdmin, userControls.getUser)
    .put(verifyToken, userControls.apdateuser)
    .delete(verifyToken, userControls.deleteuser);

module.exports = router;
