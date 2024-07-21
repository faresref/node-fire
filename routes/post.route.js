const express = require('express')
const router = express.Router()

const postcontrolls = require('../controllers/post.controller.js')
const verifyToken = require('../MIDLLWARE/verfytoken.js');
const siterpost= require('../MIDLLWARE/siterpost.js');
const photoUpload= require('../MIDLLWARE/photoUpload');

       
/** -----------------------------------
| * @desc    : get all posts           |
| * @route   : api/user/posts          |
| * @methode : get                     |
| * @access  : public                  |
-------------------------------------**/
router.get('/'  , postcontrolls.getAllPost )
/**_______________________________
| * @desc    : get one  post      |
| * @route   : api/post/:id       |
| * @methode : get                |
| * @access  : public             |
__________________________________|*/
router.get('/:Id',postcontrolls.getPost)

/****************************************
*  @desc    : create post               *
*  @route   : api/post                  *
*  @methode : post                      *
*  @access  : public                    *
*****************************************/
router.post('/', photoUpload.single("image"), postcontrolls.newPost)  
/** 

/** 
 * @desc    : comment 
 * @route   : api/post/comment
 * @methode : post
 * @access  : public
**/  
router.post('/comment' , postcontrolls.commentOnPost);
/** 
 * @desc    : delete user
 * @route   : api/post/delete/:id
 * @methode : delete
 * @access  : public
**/
router.delete('/deletePost/:Id',verifyToken,siterpost,postcontrolls.deletePost)

module.exports = router;
