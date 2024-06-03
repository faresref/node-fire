const express = require('express')
const router = express.Router()

require('dotenv').config()

const usercontrolls = require('../controllers/controller')
const verifyToken = require('../MIDLLWARE/verfytoken');
const seter = require('../MIDLLWARE/seter');
const seterAdmin = require('../MIDLLWARE/seterAdmin');
const refreshTokenMiddleware2 = require('../MIDLLWARE/refrech');
const refreshTokenMiddleware = require('../MIDLLWARE/refrech');
const chec = require('../MIDLLWARE/chek-token');


//conect database
mongoose = require('mongoose')
          .connect(process.env.URL)
          .then   ((     ) => console.log  ('Connected successfully'  ))
          .catch  ((error) => console.error('Connection error:', error))
       
/** -----------------------------------
| * @desc    : get all posts           |
| * @route   : api/user/posts          |
| * @methode : get                     |
| * @access  : public                  |
-------------------------------------**/
router.get('/posts'  , usercontrolls.getAllPost )


/** -----------------------------------
| * @desc    : get all users         |
| * @route   : api/user/               |
| * @methode : get                     |
| * @access  : public                  |
-------------------------------------**/
router.get('/' ,verifyToken , usercontrolls.getAllUsers )

/**_______________________________
| * @desc    : get one  user      |
| * @route   : api/user/:id       |
| * @methode : get                |
| * @access  : public             |
__________________________________|*/
router.get("/1/:Id",usercontrolls.getUser)

/****************************************
*  @desc    : create user and regester  *
*  @route   : api/user/regester         *
*  @methode : post                      *
*  @access  : public                    *
*****************************************/
router.post('/regester', usercontrolls.regester)  



/****************************************
*  @desc    : create user and regester  *
*  @route   : api/user/regester         *
*  @methode : post                      *
*  @access  : public                    *
*****************************************/
router.post('/post', usercontrolls.newPost)  



/** 
 * @desc    : login 
 * @route   : api/user/login
 * @methode : post
 * @access  : public
**/  
router.post('/login' , usercontrolls.login);



/** 
 * @desc    : post 
 * @route   : api/user/post
 * @methode : post
 * @access  : public
**/  
router.post('/post' , usercontrolls.getAllPost);


/** 
 * @desc    : post 
 * @route   : api/user/post
 * @methode : post
 * @access  : public
**/  
router.post('/upim' , usercontrolls.uploadImage);

/** 
 * @desc    : comment 
 * @route   : api/user/comment
 * @methode : post
 * @access  : public
**/  
router.post('/comment' , usercontrolls.commentOnPost);

/** 
 * @desc    : refrech token 
 * @route   : api/user/refrech
 * @methode : post
 * @access  : public dakchi manba3d ok
**/  
router.post('/refresh-token',usercontrolls.refreshTokenMiddleware)

/** 
 * @desc    : delete user
 * @route   : api/user/delete/:id
 * @methode : delete
 * @access  : public
**/
  router.delete('/delete/:Id',verifyToken,seter,usercontrolls.deleteuser)


/** 
 * @desc    : delete user
 * @route   : api/user/delete/:id
 * @methode : delete
 * @access  : public
**/
router.delete('/deletePost/:Id',usercontrolls.deletePost)


/** 
 * @desc    : apdate user
 * @route   : api/user/apdite/:id
 * @methode : put
 * @access  : public
**/
router.put('/apdate/:Id',verifyToken,seter, usercontrolls.apdateuser);


//route commun
router.route("/all/:Id").get(verifyToken,seterAdmin,usercontrolls.getUser).put( verifyToken, usercontrolls.apdateuser).delete(verifyToken,usercontrolls.deleteuser)
//hadchi khas bl ad,in sauf   =>   is admin

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const mongoose = require('mongoose');

// // Database connection
// const dbUsername = "kdm29280";
// const dbPassword = "AqMwfwpQPBhshrfs";
// const dbCluster = "cluster0.qbnlevc.mongodb.net/crud";
// mongoose.connect(`mongodb+srv://${dbUsername}:${dbPassword}@${dbCluster}`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log('Connected successfully');
// })
// .catch((error) => {
//   console.error('Connection error:', error);
// });

// // Import models
// const Artical1 = require('../models/artical');
// const Admin = require('../models/Admin');

// // ...

// // Your routes go here

// // ...

// module.exports = router;
