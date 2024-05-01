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
const express = require('express');
const userpath = require('./routes/user');

app  = express();
      cors = require('cors');
      port = 7000;

app.use(cors());
app.use(express.json())
app.use("/api/user",userpath)


app.listen(port||7000, () => {
console.log('Server is running on port', port)})

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


