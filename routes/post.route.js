const express = require('express')
const router = express.Router()

const postcontrolls = require('../controllers/auth.controller.js')
const verifyToken = require('../MIDLLWARE/verfytoken.js');
const siterpost= require('../MIDLLWARE/siterpost.js');

       
/** -----------------------------------
| * @desc    : get all posts           |
| * @route   : api/user/posts          |
| * @methode : get                     |
| * @access  : public                  |
-------------------------------------**/
router.get('/'  , postcontrolls.getAllPost )
/**_______________________________
| * @desc    : get one  user      |
| * @route   : api/user/:id       |
| * @methode : get                |
| * @access  : public             |
__________________________________|*/
router.get('/:Id',postcontrolls.getPost)

/****************************************
*  @desc    : create user and regester  *
*  @route   : api/user/regester         *
*  @methode : post                      *
*  @access  : public                    *
*****************************************/
router.post('/post', postcontrolls.newPost)  
/** 

/** 
 * @desc    : comment 
 * @route   : api/user/comment
 * @methode : post
 * @access  : public
**/  
router.post('/comment' , postcontrolls.commentOnPost);
/** 
 * @desc    : delete user
 * @route   : api/user/delete/:id
 * @methode : delete
 * @access  : public
**/
router.delete('/deletePost/:Id',verifyToken,siterpost,postcontrolls.deletePost)

module.exports = router;
