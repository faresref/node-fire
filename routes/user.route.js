const express = require('express');
const router = express.Router();

const userControls = require('../controllers/user.controller');  // Ensure this path is correct
const verifyToken = require('../MIDLLWARE/verfytoken');
const seter = require('../MIDLLWARE/seter');
const seterAdmin = require('../MIDLLWARE/seterAdmin');
const verfytoken = require('../MIDLLWARE/verfytoken');
const photoUpload = require('../MIDLLWARE/photoUpload');

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

// /api/users/profile/profile-photo-upload
router
  .route("/profile/profile-photo-upload")
  .post(photoUpload.single("image"), userControls.profilePhotoUploadCtrl);

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
 * @desc    : Refresh token
 * @route   : /api/user/refresh-token
 * @method  : POST
 * @access  : Public
**/  
router.post('/refresh-token',verfytoken, userControls.refreshTokenMiddleware);

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
