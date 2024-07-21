const bcrypt  = require('bcrypt')

const jwt     = require('jsonwebtoken')

const path = require("path");

const Artical1 =  require('../models/user.model')

const nodemailer = require('nodemailer');

const fs = require('fs');

const {
  cloudinaryUploadImage,
  cloudinaryRemoveImage,
  cloudinaryRemoveMultipleImage
} = require("../MIDLLWARE/cloudinary.JS")


const regester = async (req, res) => {
  try {
   const {_id,name,age,email,passwors,passrepet,srcProfile} = req.body

   // Use async/await to handle asynchronous operations
   const admin = await Artical1.findOne({ email });

    //Check if the user exists
      if (admin) {
        return res.status(404).json({ message: 'User is exist. Cannot regester.' }) }
    //generate new token    
    const token = await jwt.sign({ userId:_id }, 'your_secret_key');
   // ,{ expiresIn: '3y' }
      if (typeof passwors !== 'string') {
       return res.status(400).json({ error: 'Invalid password format' }) }

    // Hash the password
    const hashpasswoed = bcrypt.hashSync  (passwors, 10, (err, hash) => {
      if (err) { console.error('Error hashing password:', err)}
       else {console.log('Hashed Password:', hash)}
    })

    const newArticle = new Artical1({_id,name,passwors:hashpasswoed,age,email,passrepet,token,srcProfile});
          //newArticle == newdocument
                //newArticle._id       =       777                     ;
                // newArticle.name      = ' tarik tissoudali          ' ;
                // newArticle.age       =       30                      ;
               // newArticle.email     = 'tariktissoudali30@gmail.com' ;
             //    newArticle.username7 = 'tisspudali ya habibi       ' ;
              //   newArticle.passwors  = 'tarik tissoiudali          ' ;
      await newArticle.save() 
       res.json({ 
       token,userId: _id ,user:newArticle,message: 'Welcome! REGESTER successful.',isadmin:newArticle.isadmin }) }     

      catch (error) {                                                
      console.error(error)                                        
      res.status(500).json({ error: 'Internal Server Error post bibi'})}         

  }

const login =  async (req, res) => {
    try {
      const { email, passwors } = req.body;
  
      // Use async/await to handle asynchronous operations
      const admin = await Artical1.findOne({ email })
  
      // Check if the user exists
      if (!admin) {
        return res.status(404).json({ message: 'User does not exist. Cannot log in.' })
      }
  
      // Compare passwords using bcrypt
      const isPasswordValid = await bcrypt.compare(passwors, admin.passwors)
      // Check if the password is valid
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Username or password is incorrect try again' })
      }
     generateAccessToken(admin)
      const token =  jwt.sign({ userId: admin._id,isadmin:admin.isadmin }, 'your_secret_key')

      // If username and password are valid, you can proceed with your logic
      //  res.json({ message: 'Welcome! Login successful.',token,userId: admin._id,age:admin.age,isadmin:admin.isadmin ,passwors,passdblog:admin.passwors,name:admin.name,email})
      res.json({ 
        token,userId: admin._id ,message: 'Welcome! REGESTER successful.',user:admin,isadmin:admin.isadmin }) 
       // Create a JWT token

    
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal server error login' });
    }
  }

 
const sendemailc = async (req, res) => {

console.log('is run')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'reffaress@gmail.com',
    pass: 'fares.ref146612'
  }
});

const mailOptions = {
  from: 'reffaress@gmail.com',
  to: 'reffaress@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
};

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

// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

// // Set up Multer storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const uploadDir = 'uploads';
//     if (!fs.existsSync(uploadDir)) {
//       fs.mkdirSync(uploadDir); // Create the 'uploads' directory if it doesn't exist
//     }
//     cb(null, uploadDir); // Use the 'uploads' directory for storing files
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     cb(null, `${Date.now()}${ext}`); // Rename the file with a timestamp and its original extension
//   }
// });

 //const upload = multer({ storage: storage });

// // Handle image upload
 const uploadImage = (req, res) => {
//   upload.single('image')(req, res, (err) => {
//     if (err instanceof multer.MulterError) {
//       return res.status(500).json({ error: 'Multer error occurred.', message: err.message });
//     } else if (err) {
//       return res.status(500).json({ error: 'An unexpected error occurred.', message: err.message });
//     }
    const file =req.file
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }
    
    const imageUrl = `http://localhost:3000/uploads/${req.file.filename}`;
    res.status(201).json({ imageUrl: imageUrl });
  };
                                                    
  
module.exports={
  regester,
  login,
  sendemailc,
  refreshTokenMiddleware,
  refreshTokenMiddleware2,
  uploadImage}