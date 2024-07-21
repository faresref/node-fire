const jwt     = require('jsonwebtoken')

const Artical1 =  require('../models/user.model')

const path = require('path')

const fs = require('fs');

const {
  cloudinaryUploadImage,
  cloudinaryRemoveImage,
  cloudinaryRemoveMultipleImage
} = require("../MIDLLWARE/cloudinary.JS")

const getAllUsers = async (req,res) => {
    try{
        //get all articl or docum or users from db or costemer-modul(users) =>
        const todosarticles = await Artical1.find().sort({age:-1})  ;
        //testeur f lconcol  =>
        console.log('inchallah yasr lana ya ullah'  )  ;
        //responsable of api =>
        res.json(          todosarticles            )  ;
    }
    //ila mardamch i3lmak indar warnnig (catch hta try) =>
    catch(error){console.log('error sheeet get all users bk'),error} 
    }
    
const getUser = async(req,res)=>{

    try {
    
      const id = req.params.Id
    
      const user = await Artical1.findById(id)
    
      !user &&  res.status(404).json({messageT:"the user not found"})
        
      user  &&  res.status(200).json(user)
    
       }
     catch{
      res.status(500).json({messageT:"error in get user by id server err"})
          }
    
}

const apdateuser = async (req, res) => {
    const id    = req.params.Id;
    const newn  = req.body.name;
    const srcn  = req.body.src;
    const srcProfilen  = req.body.srcProfile;
  
    try {
      const updatedItem = await Artical1.findByIdAndUpdate(
        id,
        { $set: { name: newn, src: srcn, srcProfilen: srcProfilen } },
        { new: true }
      );
  res.json(updatedItem,);
  
    } 
    catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error 3andk error f updite' });
    }
  }
const deleteuser = async (req, res) => {
    const id = req.params.Id
   // const currentuser = await Artical1.findById(id)
   // if (!currentuser)
   // {return res.status(404).json({ message: 'User is not found Can not delete' }) }
   
   // const tokenAuth  = req.header("authorization")
   // const tokenDb    = currentuser.token
   // const userid     = req.user.userId
   //   if (userid    !== id     
   //   &&  tokenAuth !== tokenDb )
   //      {return res.status(403).json({ message: "Cannot delete another user's account" }) }
 
   try {
     const userid     = 1
     const user = await Artical1.findById(userid)
     const artical = await Artical1.findByIdAndDelete(id)
        res.json(artical)
    
   } 
   catch (error) {
     console.error('Error deleting user:', error)
     res.status(500).json({ message: 'Internal Server Error during user deletion' })
   }
 }
 const refreshTokenMiddleware = async (req, res) => {

    try {
  
  //   const token = req.headers.authorization  
  //  if( !token ){ return res.status(401).json("You are not authenticated!")}
  
  //   const decoded = await jwt.verify(token,'your_secret_key')
    const decoded    = req.user
    console.log(decoded)
    
    const token1 = await generateRefreshToken(decoded)  
  
    const updatedItem = await Artical1.findByIdAndUpdate(decoded.userId,{ $set:{token:token1} },{ new: true });
    res.json({updatedItem,userId:decoded.userId});
  
    if (decoded.exp < Date.now() / 1000) {
      // Token expired, redirect to refresh token endpoint
      return res.json('updatedItem');
      //res.redirect('/refresh-token');
        //jwt.sign({ userId:id }, 'your_secret_key',{ expiresIn: '3y' });
  
    }
    } 
    catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error 3andk error f updite token' });
    }
   
  
  };
  
  const refreshTokenMiddleware2 = (req, res) => {
    let refreshTokens = [];
  
    //take the refresh token from the user
    const refreshToken = req.headers.authorization
  
    //send error if there is no token or it's invalid
    if (refreshTokens.includes(refreshToken)) {
      return res.status(403).json("Refresh token is not valid!");
    }
    jwt.verify(refreshToken, "your_secret_key", (err, user) => {
      err && console.log(err);
      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  
      const newAccessToken = generateAccessToken(user);
      const newRefreshToken = generateRefreshToken(user);
  
      refreshTokens.push(newRefreshToken);
  
      res.status(200).json({
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      });
    });
  
    //if everything is ok, create new access token, refresh token and send to user
  };
  
  const generateAccessToken = (user) => {
    
  };
  
  const generateRefreshToken = (decoded) => {
    return jwt.sign({ userId: decoded.userId, isAdmin:decoded.isAdmin}, "your_secret_key");
  };

  /**-----------------------------------------------
 * @desc    Profile Photo Upload
 * @route   /api/users/profile/profile-photo-upload
 * @method  POST
 * @access  private (only logged in user)
 ------------------------------------------------*/
 const profilePhotoUploadCtrl = async (req, res) => {
  // 1. Validation
  if (!req.file) {
   return res.status(400).json({ message: "no file provided" });
 }
 
 console.log('sictot cloud ',process.env.CLOUDINARY_API_SECRET
 )
 // 2. Get the path to the image
 const imagePath = path.join(__dirname, `../images/${req.file.filename}`);
 
 // 3. Upload to cloudinary
 const result = await cloudinaryUploadImage(imagePath);
 
 // // 4. Get the user from DB
 // const user = await User.findById(req.user.id);
 
 
 // // 5. Delete the old profile photo if exist
 // if (user.profilePhoto?.publicId !== null) {
 //   await cloudinaryRemoveImage(user.profilePhoto.publicId);
 // }
 
 // // 6. Change the profilePhoto field in the DB
 // user.profilePhoto = {
 //   url: result.secure_url,
 //   publicId: result.public_id,
 // };
 // await user.save();
 
 // 7. Send response to client
 res.status(200).json({
   message: "your profile photo uploaded successfully",
   profilePhoto: { url: result.secure_url, publicId: result.public_id },
 });
 
 //8. Remvoe image from the server
 fs.unlinkSync(imagePath);
 }
  module.exports={
    getAllUsers,
    getUser,
    apdateuser,
    deleteuser,
    refreshTokenMiddleware,
    refreshTokenMiddleware2,
    profilePhotoUploadCtrl
    }