//router

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

//app js 
// // ... rest of your server setup




                                                     



// const Article = mongoose.model('module', ArticleSchema);


// const ArticleSchema = new mongoose.Schema({
 
//   name: { type: String },
//   age: { type: Number },
//   email: { type: String },
//    _id : Number,
//   username7: { type : String},
//   passwors: { type : String},

// });

//const Article = mongoose.model('module', ArticleSchema);


// app.get('/articles', async (req, res) => {
//   try {
//     const articles = await Artical1.find({});
//     res.json(articles);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });fille  artical


// const ArticleSchema = new mongoose.Schema({
 
//   name: { type: String },
//   age: { type: Number },
//   email: { type: String },
//    _id : Number,
//   username7: { type : String},
//   passwors: { type : String},

// });ntahna b3d 20yom 27/01/2024 lakin bdit w9ila f 01/11/2023 w bdit react f 18/12/2023 w lmern stack f 20/01/2024 m3a 10days mou9oufa 

//const Artical1 = mongoose.model('module', ArticleSchema);


// const express = require('express')

// const mongoose = require('mongoose')


// // database
// //mongoose.connect('mongodb+srv://FarisRef:kd292m80@cluster0.h1kfipj.mongodb.net/mernatape?retryWrites=true&w=majority')
// mongoose.connect('mongodb+srv://kdm29280:AqMwfwpQPBhshrfs@cluster0.qbnlevc.mongodb.net/crud')
// .then(()=>{console.log('conacted saccesfuly')})//
// .catch((error)=>{console.log('error sheeet'),error})



// //const Schema = mongoose.Schema
// const UserSchema = new mongoose.Schema({
// name:{type: String,},
// age:{type: Number,},
// email:{type: String,},



// })



// const artical = mongoose.model("Article" , UserSchema)



// //const UserModel = require("./models/artical")




// const app = express()
// const port = 5000





// app.post("/bibi" , async(req, res)=>{ 
// const newArticale = new Artical();
// newArticale.name ="9aba";
// newArticale.age =15;
// newArticale.name ="9aba15@gmail.com";
// await newArticale.save() 
// res.send('nadddddddddddddi')

// })
// app.listen(port, () => {
//     console.log('intrakht frankfort')
// })
// //AqMwfwpQPBhshrfs
// //kdm29280
// kdm29280@gmail.com

//app js ------------------------------------

// //conect databasemongoose = require('mongoose');
      // usernamedb     =  "kdm29280"
      // passdb         =  "AqMwfwpQPBhshrfs"
      // ClusterProject =  "cluster0.qbnlevc.mongodb.net/crud"
// mongoose.connect(`mongodb+srv://${usernamedb}:${passdb}@${ClusterProject}`, )
//   .then(() => {
//     console.log('Connected successfully');
//   })
//   .catch((error) => {
//     console.error('Connection error:', error);
//   }); 

// //import user modul or artical
// const Artical1 =  require('./models/artical');
// const Admine   =  require('./models/Admin');

// /** 
//  * @desc    : get all users
//  * @route   : api/user/
//  * @methode : get
//  * @access  : public
// **/
// app.get('/api/user' , async (req,res) => {
// try{
//     //get all articl or docum or users from db or costemer-modul(users) =>
//     const todosarticles = await Artical1.find().sort({age:-1})  ;
//     //testeur f lconcol  =>
//     console.log('inchallah yasr lana ya ullah'  )  ;
//     //responsable of api =>
//     res.json(          todosarticles            )  ;
// }
// //ila mardamch i3lmak indar warnnig (catch hta try) =>
// catch(error){console.log('error sheeet get bk'),error} 
//  } )

// /** 
//  * @desc    : get one  user 
//  * @route   : api/user/:id
//  * @methode : get
//  * @access  : public
// **/
// app.get("/api/user/:userId",async(req,res)=>{

// try {

//   const id = req.params.userId

//   const user = await Artical1.findById(id)

//   !user &&  res.status(404).json({messageT:"the user not found"})
    
//   user  &&  res.status(200).json(user)

//    }
//  catch{
//   res.status(500).json({messageT:"error in get user by id server err"})
//       }

// })

// /** 
//  * @desc    : create user and regester
//  * @route   : api/user/regester
//  * @methode : post
//  * @access  : public
// **/
// app.post('/api/user/regester', async (req, res) => {
 

// try {
//   const {_id,name,age,email,passwors,passrepet} = req.body
//       // Use async/await to handle asynchronous operations
//       const admin = await Artical1.findOne({ name });
  
//       //Check if the user exists
//       if (admin) {
//         return res.status(404).json({ message: 'User is exist. Cannot regester.' });
//       }
//   const token = await jwt.sign({ userId:{_id }}, 'your_secret_key');

//        if (typeof passwors !== 'string') {
//   return res.status(400).json({ error: 'Invalid password format' });
// }
// // Sample password
// // Hash the password
// const hashpasswoed = bcrypt.hashSync  (passwors, 10, (err, hash) => {
//   if (err) {
//     console.error('Error hashing password:', err);
//   } else {
//     console.log('Hashed Password:', hash);
//   }
// });
//   const newArticle = new Artical1({_id,name,passwors:hashpasswoed,age,email,passrepet,token});
//       //newArticle == newdocument
//             //newArticle._id       =       777                     ;
//             // newArticle.name      = ' tarik tissoudali          ' ;
//             // newArticle.age       =       30                      ;
//            // newArticle.email     = 'tariktissoudali30@gmail.com' ;
//          //    newArticle.username7 = 'tisspudali ya habibi       ' ;
//           //   newArticle.passwors  = 'tarik tissoiudali          ' ;

//   await     newArticle.save() 
//  // res.status(200)                                ;
//   // res.json('kljklj;jkljkl;')   


      
// //   if(!admin){
// //   return res.send("artica don't exist" ).status(404)
// // }
//   // res.json({ message: 'Welcome! regester successful.',token,userId: admin._id  });

//  //const {passwors} = req.body
//  //const {name} = req.body
//    res.json({ message: 'Welcome! REGESTER successful.',token,userId: {_id} ,user:{_id,name,age,passwors,passrepet,email} });

//      }                   
//   catch (error) {                                                ;
//   console.error(error)                                        ;
//   res.status(500).json({ error: 'Internal Server Error post bibi'})}
    
//   }
  
//   )  

// /** 
//  * @desc    : login 
//  * @route   : api/user/login
//  * @methode : post
//  * @access  : public
// **/  
//   app.post('/api/user/login', async (req, res) => {
//     try {
//       const { name, passwors } = req.body;
  
//       // Use async/await to handle asynchronous operations
//       const admin = await Artical1.findOne({ name });
  
//       // Check if the user exists
//       if (!admin) {
//         return res.status(404).json({ message: 'User does not exist. Cannot log in.' });
//       }
  
//       // Compare passwords using bcrypt
//       const isPasswordValid = await bcrypt.compare(passwors, admin.passwors);
  
//       // Check if the password is valid
//       if (!isPasswordValid) {
//         return res.status(401).json({ message: 'Username or password is incorrect try again' });
//       }
//       const token = jwt.sign({ userId: admin._id }, 'your_secret_key');

//       // If username and password are valid, you can proceed with your logic
//         res.json({ message: 'Welcome! Login successful.',token,userId: admin._id  });

//        // Create a JWT token

    
//     } catch (error) {
//       console.error('Error during login:', error);
//       res.status(500).json({ message: 'Internal server error.' });
//     }
//   });

// /** 
//  * @desc    : delete user
//  * @route   : api/user/delete/:id
//  * @methode : delete
//  * @access  : public
// **/
//   app.delete('/api/user/delete/:articleId',async(req,res)=>{
//   const id = req.params.articleId
// try{
//   const artical = await Artical1.findByIdAndDelete(id)
//   res.json('user')
// }
// catch(error){console.log('big error delete  ',error)}
// })

// /** 
//  * @desc    : apdate user
//  * @route   : api/user/apdite/:id
//  * @methode : put
//  * @access  : public
// **/
// app.put('/api/user/apdate/:id', async (req, res) => {
//   const id    = req.params.id;
//   const newn  = req.body.name;

//   try {
//     const updatedItem = await Artical1.findByIdAndUpdate(id,{ $set:{name:newn} },{ new: true });
//       res.json(updatedItem);

//   } 
//   catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error 3andk error f updite' });
//   }
// });



//   app.post('api/user/login2',async(req,res)=>{
// try{
//     const {name,passwors} = req.body
//     const admin = await Artical1.findOne({name})  ;    

//  if  (!admin) {return res.send('user dont exist cant login' )}
//   //admin &&res.send('welcom')
  
//   //const ispasswordvalid = await bcrypt.compare(passwors,admin.passwors)
//   const isPasswordValid2 = await bcrypt.compare(passwors, pass=admin.passwors);
// if (!isPasswordValid2)  {return res.json({message:"username or password is incorrect"})}
// res.json({ message: 'Welcome! Login successful.' });

// }
// catch(error){console.log('big error login cbt  ',error);res.status(404)}
// })
// app.put('/up/:id',async (req,res)=>{
// const id = req.params.id
// try{
//   const artical = await Artical1.findByIdAndUpdate(id)
//   res.json('khadam')
// }
// catch(error){
//   console.log('nooo upsite',error)
// }
// })
   // app.post('/login', async (req, res) => {
  //   try {
  //     const { name, passwors } = req.body;
  
  //     // Use async/await to handle asynchronous operations
  //     const admin = await Artical1.findOne({ name });
  
  //     // Check if the user exists
  //     if (!admin) {
  //       return res.status(404).json({ message: 'User does not exist. Cannot log in.' });
  //     }
  
  //     // Compare passwords using bcrypt
  //     const isPasswordValid = await bcrypt.compare(passwors, admin.passwors);
  
  //     // Check if the password is valid
  //     if (!isPasswordValid) {
  //       return res.status(401).json({ message: 'Username or password is incorrect. Please try again.' });
  //     }
  
  //     // Create a JWT token
  //     const token = jwt.sign({ userId: admin._id }, 'your_secret_key');
  
  //     // Send the token in the response along with other necessary data
  //     res.json({ message: 'Welcome! Login successful.', token, userId: admin._id });
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //     res.status(500).json({ message: 'Internal server error.' });
  //   }
  // });
  // app.post('/bibi', async (req, res) => {
  //   try {
  //     const {_id, name, age, email, passwors, passrepet } = req.body;
  
  //     // Validate password format
  //     if (typeof passwors !== 'string') {
  //       return res.status(400).json({ error: 'Invalid password format' });
  //     }
  
  //     // Check if the article already exists
  //     const existingArticle = await Artical1.findOne({ name });
  //     if (existingArticle) {
  //       return res.status(409).json({ error: 'Article already exists' });
  //     }
  
  //     // Hash the password
  //     const hashPassword = bcrypt.hashSync(passwors, 10);
  
  //     // Create a new user instance
  //     const newArticle = new Artical1({ _id,name, passwors: hashPassword, age, email, passrepet });
  
  //     // Save the user to the database
  //     await newArticle.save();
  
  //     // Generate token for the user
  //     //const token = jwt.sign({ userId: newArticle._id }, 'your_secret_key');
  
  //     // Respond with success message and token
  //     //res.status(201).json({ message: 'Registration successful', token, userId: newArticle._id });
  //     // Generate token for the user
  //     //const token = jwt.sign({ userId: newArticle._id }, 'your_secret_key');
  
  //     // Respond with success message and token
  //     //res.status(201).json({ message: 'Registration successful', token, userId: newArticle._id });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Internal Server Error post bibi' });
  //   }
  // });

  /////////////////////------


// post controller --------------------------------------------

// const newPost = async (req, res) => {
//   try {
//     const todosposts = await Post1.find();
//     const {  title, description, src ,userId} = req.body;
//     const n = todosposts.length;
//     console.log(n);

//     const admin = await Artical1.findById( {userId} );

//     if (!admin) {
//       return res.status(404).json({ error: 'Admin not found' });
//     }

//     const currentDate = new Date();
//     const formattedDate = formatDistanceToNow(currentDate, { addSuffix: true });

//     const newPost = new Post1({
//       name: admin.name,
//       email: admin.email,
//       userId: admin._id,
//       _id: n + 1,
//       title,
//       description,
//       srcProfile: admin.srcProfile,
//       src,
//       date: currentDate,
//       formattedDate
//     });

//     await newPost.save();

//     res.json(newPost);
//   } catch (error) {
//     console.error('Error creating new post:', error);
//     res.status(500).json({ error: 'Internal Server Error new post:' });
//   }
// };





// Create a new post---------------------------------------


//post controller 

// const getAllPost = async (req, res) => {
//   try {
//     // Fetch all posts, sorted by _id in descending order
//     const todosposts = await Post1.find()
//     //.sort({ _id: -1 });

//     // Update the formattedDate for each post
//     todosposts.forEach(post => {
//       post.formattedDate = formatDistanceToNow(new Date(post.date), { addSuffix: true });
//     });

//     console.log('Successfully retrieved all posts');
//     res.json(todosposts);
//   } catch (error) {
//     console.error('Error occurred while fetching all posts:', error);
//     res.status(500).json({ error: 'Internal Server Error while fetching all posts' });
//   }
// };


//post controller -----------------------------

// const deletePost = async (req, res) => {

// 	try {

//     const token = req.header("Authorization")
//     if(!token){
//         return res.status(401).json({messageT:"the token not found"})}
      
//         const decoded = await jwt.verify(token,'your_secret_key')
//         req.user = decoded
//         console.log("mna del contr",decoded)

// 		const post = await Post1.findById(req.params.Id);
// 		if (!post) {
// 			return res.status(404).json({ error: "Post not found" });
// 		}
// 		// if (post) {
// 		// 	return res.status(200).json({post});
// 		// }

// 		if (post._id !== decoded.userId) {
// 			return res.status(401).json({ error: "You are not authorized to delete this post" });
// 		}

// 		// if (post.img) {
// 		// 	const imgId = post.img.split("/").pop().split(".")[0];
// 		// 	await cloudinary.uploader.destroy(imgId);
// 		// }

// 		await Post1.findByIdAndDelete(req.params.Id);

// 		res.status(200).json({ message: "Post deleted successfully",post });
// 	} catch (error) {
// 		console.log("Error in deletePost controller: ", error);
// 		res.status(500).json({ error: "Internal server error" });
// 	}
// };

// mongo db connect --------------------------
// const mongoose = require('mongoose')
//         .connect(process.env.URL)
//         .then   ((     ) => console.log  ('Connected successfully'  ))
//         .catch  ((error) => console.error('Connection error:', error))

//app js --------------------------------------
// app.listen(port||7000, () => {
// console.log('Server is running on port', port)
// connectMongoDB()
// })

// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();

// const userpath = require('./routes/auth.route');
// const postpath = require('./routes/post.route'); // Assuming there's a separate file for post routes

// const { connectMongoDB } = require('./db/connectMongoDB');

// const app = express();
// const port = process.env.PORT || 7000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/user", userpath);
// app.use("/api/posts", postpath);

// // Start Server and Connect to MongoDB
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
//   connectMongoDB().then(() => {
//     console.log('Connected to MongoDB');
//   }).catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });
// });// app.js

//app js ----------------------------------------------------------------

// const express = require('express');

// const userpath = require('./routes/auth.route');
// const postpath = require('./routes/auth.route');

// require('dotenv').config();

// const { connectMongoDB } = require('./db/connectMongoDB');
// app  = express();
//       cors = require('cors');
//       port = 7000;

// app.use(cors());
// app.use(express.json())
// app.use("/api/user",userpath)
// app.use("/api/posts", userpath);


// app.listen(port||7000, () => {
// console.log('Server is running on port', port)
// connectMongoDB()
// })

//connect mongoDB--------------------------------------------------------------------
// const mongoose = require('mongoose');

// const connectMongoDB = async () => {
//     try {
//         await mongoose.connect(process.env.URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false,
//             useCreateIndex: true
//         });
//         console.log('Connected successfully');
//     } catch (error) {
//         console.error('Connection error:', error);
//     }
// };

// module.exports = { connectMongoDB };

//user controller ------------------------------------------------------------------------------
const getAllPost = async (req, res) => {
      try {
        // Fetch all posts, sorted by _id in descending order
        const todosposts = await Post1.find().sort({ _id: -1 }).exec();
    
        // Create a new array with the updated formattedDate for each post
        const updatedPosts = todosposts.map(post => ({
          ...post._doc,
          formattedDate: formatDistanceToNow(new Date(post.date), { addSuffix: true })
        }));
    
        console.log('Successfully retrieved all posts');
        res.json(updatedPosts);
      } catch (error) {
        console.error('Error occurred while fetching all posts:', error);
        res.status(500).json({ error: 'Internal Server Error while fetching all posts' });
      }
    };
    
    
    const getAllComment = async (req, res) => {
      try {
        // Assuming you want to get comments from a specific post, you need to specify the postId
        const postId = req.params.postId;
    
        // Find the post by ID and populate the comments field if it references another collection
        const post = await Post1.findById(postId).populate('comments');
    
        if (!post) {
          return res.status(404).json({ error: 'Post not found' });
        }
    
        console.log('Successfully retrieved all comments');
        res.json(post.comments);
      } catch (error) {
        console.error('Error occurred while fetching all comments:', error);
        res.status(500).json({ error: 'Internal Server Error while fetching all comments' });
      }
    };

    
const getPost = async(req,res)=>{

      try {
      
        const id = req.params.Id
      
        const post = await Post1.findById(id)
      
        !post &&  res.status(404).json({messageT:"the post not found"})
          
        post  &&  res.status(200).json(post)
      
         }
       catch{
        res.status(500).json({messageT:"error in get post by id server err"})
            }
      
  }

  // const newPost = async (req, res) => {
//   try {
//     const todosposts = await Post1.find();
//     const {  title, description, src ,userId} = req.body;
//     const n = todosposts.length;
//     console.log(n);

//     const admin = await Artical1.findById( {userId} );

//     if (!admin) {
//       return res.status(404).json({ error: 'Admin not found' });
//     }

//     const currentDate = new Date();
//     const formattedDate = formatDistanceToNow(currentDate, { addSuffix: true });

//     const newPost = new Post1({
//       name: admin.name,
//       email: admin.email,
//       userId: admin._id,
//       _id: n + 1,
//       title,
//       description,
//       srcProfile: admin.srcProfile,
//       src,
//       date: currentDate,
//       formattedDate
//     });

//     await newPost.save();

//     res.json(newPost);
//   } catch (error) {
//     console.error('Error creating new post:', error);
//     res.status(500).json({ error: 'Internal Server Error new post:' });
//   }
// };





// Create a new post


const newPost = async (req, res) => {
      try {
        const { title, description, src, userId } = req.body;
    
        // Validate request body
        if (!title || !description || !userId) {
          return res.status(400).json({ error: 'Missing required fields' });
        }
    
        // Find the admin by userId
        const admin = await Artical1.findById(userId);
    
        if (!admin) {
          return res.status(404).json({ error: 'Admin not found' });
        }
    
        const currentDate = new Date();
        const formattedDate = formatDistanceToNow(currentDate, { addSuffix: true });
    
        // Create a new Post instance
        const newPost = new Post1({
          name: admin.name,
          email: admin.email,
          userId: admin._id,
          title,
          description,
          srcProfile: admin.srcProfile,
          src,
          date: currentDate,
          formattedDate
        });
    
        // Save the post to the database
        await newPost.save();
    
        res.json(newPost);
      } catch (error) {
        console.error('Error creating new post:', error);
        res.status(500).json({ error: 'Internal Server Error while creating new post.' });
      }
    };
    
    const commentOnPost = async (req, res) => {
      try {
        const { text, _id, userId,srcProfile,nameC } = req.body;
    
        if (!text) {
          return res.status(400).json({ error: "Text field is required" });
        }
    
        // Validate and find post by its ID
        const post = await Post1.findById(_id);
    
        if (!post) {
          return res.status(404).json({ error: "Post not found" });
        }
    
        const currentDate = new Date();
        const formattedDate = formatDistanceToNow(currentDate, { addSuffix: true });
    
        const comment = {
          user: userId,
          text,
          nameC,
          srcProfile,
          date: currentDate,
          formattedDate
        };
    
        post.comments.push(comment);
        await post.save();
    
        res.status(200).json(post);
      } catch (error) {
        console.log("Error in commentOnPost controller: ", error);
        res.status(500).json({ error: "Internal server error" });
      }
    };
    

// const deletePost = async (req, res) => {

// 	try {

//     const token = req.header("Authorization")
//     if(!token){
//         return res.status(401).json({messageT:"the token not found"})}
      
//         const decoded = await jwt.verify(token,'your_secret_key')
//         req.user = decoded
//         console.log("mna del contr",decoded)

// 		const post = await Post1.findById(req.params.Id);
// 		if (!post) {
// 			return res.status(404).json({ error: "Post not found" });
// 		}
// 		// if (post) {
// 		// 	return res.status(200).json({post});
// 		// }

// 		if (post._id !== decoded.userId) {
// 			return res.status(401).json({ error: "You are not authorized to delete this post" });
// 		}

// 		// if (post.img) {
// 		// 	const imgId = post.img.split("/").pop().split(".")[0];
// 		// 	await cloudinary.uploader.destroy(imgId);
// 		// }

// 		await Post1.findByIdAndDelete(req.params.Id);

// 		res.status(200).json({ message: "Post deleted successfully",post });
// 	} catch (error) {
// 		console.log("Error in deletePost controller: ", error);
// 		res.status(500).json({ error: "Internal server error" });
// 	}
// };
const deletePost = async (req, res) => {
	try {

		const post = await Post1.findById(req.params.Id);

		await Post1.findByIdAndDelete(req.params.Id);

		res.status(200).json({ message: 'Post deleted successfully', postis:post });
	} catch (error) {
		console.error('Error in deletePost controller: ', error);
		res.status(500).json({ error: 'Internal server error' });
	}
};

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
// lk;ldskl dlkjkl mldkjlkm, 