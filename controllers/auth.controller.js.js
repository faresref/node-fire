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


// const register = async (req, res) => {
//   try {
//    const {_id,name,age,email,passwors,passrepet,srcProfile} = req.body

//   // 1.Validate request body
//      if (!_id || !name || !age || !email || !passwors|| !passrepet || !srcProfile) {
//        return res.status(400).json({ error: 'Missing required fields 1' });
//      }
//     // 2. Validation for image
//     if (!req.file) {
//       return res.status(400).json({ message: "No image provided" });
//     }

//   // 2. Get the path to the image
//   const imagePath = path.join(__dirname, `../images/${req.file.filename}`);

//   // 3. Upload to cloudinary
//   const result = await cloudinaryUploadImage(imagePath);
//   // 4. Get the user from DB
//   //  const user = await Artical1.findById(_id);


//   // 5. Delete the old profile photo if exist
//   //  if (user.image?.publicId !== null) {
//   //    await cloudinaryRemoveImage(user.image.publicId);
//   //  }

//    // Use async/await to handle asynchronous operations
//    const admin = await Artical1.findOne({ email });

//     //Check if the user exists
//       if (admin) {
//         return res.status(404).json({ message: 'User is exist. Cannot regester.' }) }
//     //generate new token    
//     const token = await jwt.sign({ userId:_id }, 'your_secret_key');
//    // ,{ expiresIn: '3y' }
//       if (typeof passwors !== 'string') {
//        return res.status(400).json({ error: 'Invalid password format' }) }

//     // Hash the password
//     const hashpasswoed = bcrypt.hashSync  (passwors, 10, (err, hash) => {
//       if (err) { console.error('Error hashing password:', err)}
//        else {console.log('Hashed Password:', hash)}
//     })

//     const newArticle = new Artical1({
//       _id,name,passwors:hashpasswoed,
//       age,email,passrepet,token,srcProfile,
//       image: {
//         url: result.secure_url,
//         publicId: result.public_id,
//       },
    
//     });
//           //newArticle == newdocument
//                 //newArticle._id       =       777                     ;
//                 // newArticle.name      = ' tarik tissoudali          ' ;
//                 // newArticle.age       =       30                      ;
//                // newArticle.email     = 'tariktissoudali30@gmail.com' ;
//              //    newArticle.username7 = 'tisspudali ya habibi       ' ;
//               //   newArticle.passwors  = 'tarik tissoiudali          ' ;
//       await newArticle.save() 
//        res.json({ 
//        token,userId: _id ,user:newArticle,
//        message: 'Welcome! REGESTER successful.',
//        isadmin:newArticle.isadmin,image:newArticle.image }) 
      
//     // 9. Remove image from the server
//     fs.unlinkSync(imagePath);    
      
//       }     
//       catch (error) {                                                
//       console.error(error)                                        
//       res.status(500).json({ error: 'Internal Server Error post bibi'})}         

//   }

const register = async (req, res) => {
  try {
    const { name, age, email, password, passwordRepeat } = req.body;

    // Validate request body
    if (!name || !age || !email || !password || !passwordRepeat) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate password confirmation
    if (password !== passwordRepeat) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Validation for image
    if (!req.file) {
      return res.status(400).json({ message: 'No image provided' });
    }

    // Get the path to the image
    const imagePath = path.join(__dirname, `../images/${req.file.filename}`);

    // Upload to cloudinary
    const result = await cloudinaryUploadImage(imagePath);

    // Check if the user exists
    const existingUser = await Artical1.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists. Cannot register.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    const newUser = new Artical1({
      name,
      password: hashedPassword,
      age,
      email,
      passrepet: passwordRepeat,
      image: {
        url: result.secure_url,
        publicId: result.public_id,
      },
    });

    // Save the new user document to the database
    await newUser.save();

    // Generate new token
    const token = jwt.sign({ userId: newUser._id }, 'your_secret_key', { expiresIn: '3y' });

    // Remove image from the server
    fs.unlinkSync(imagePath);

    res.json({
      token,
      userId: newUser._id,
      user: newUser,
      message: 'Welcome! Registration successful.',
      isAdmin: newUser.isAdmin,
      image: newUser.image,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const login =  async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Use async/await to handle asynchronous operations
      const admin = await Artical1.findOne({ email })
  
      // Check if the user exists
      if (!admin) {
        return res.status(404).json({ message: 'User does not exist. Cannot log in.' })
      }
  
      // Compare passwords using bcrypt
      const isPasswordValid = await bcrypt.compare(password, admin.password)
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
      res.status(500).json({ message: 'Internal server error login ' });
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
  register,
  login,
  sendemailc,
  uploadImage}