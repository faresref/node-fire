const bcrypt  = require('bcrypt')

const jwt     = require('jsonwebtoken')

const Artical1 =  require('../models/user.model')

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
                                                    
  
module.exports={getAllUsers,getUser,regester,login,deleteuser,apdateuser,refreshTokenMiddleware,refreshTokenMiddleware2,uploadImage}
