//import user modul or artical
const Artical1 =  require('../models/user.model')
const Post1 =  require('../models/post.model')
const path =  require('path')
const fs =  require('fs')

const { formatDistanceToNow } = require('date-fns');
const { cloudinaryUploadImage } = require('../MIDLLWARE/cloudinary.JS');

const getAllPost = async (req, res) => {
    try {
      // Fetch all posts, sorted by _id in descending order
      const todosposts = await Post1.find().sort({ _id: -1 }).exec().populate("Module", ["-password"]);
      ;
  
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
//     try {
//       const { title, description, image, userId } = req.body;
  
//   // 1.Validate request body
//      if (!title || !description || !userId) {
//        return res.status(400).json({ error: 'Missing required fields 1' });
//      }
  
//  // 2. Validation for image
//   if (!req.file) {
//     return res.status(400).json({ message: "no image provided" });
//   }

//  // 3. Upload photo
//  const imagePath = path.join(__dirname, `../images/${req.file.filename}`);
//  const result = await cloudinaryUploadImage(imagePath);

//  // 4.Find the admin by userId
//     const admin = await Artical1.findById(userId);
//      if (!admin) {
//        return res.status(404).json({ error: 'Admin not found' });
//      }
//  // 5. Create thw date 
//    const currentDate = new Date();
//    const formattedDate = formatDistanceToNow(currentDate, { addSuffix: true });
  
//   // 6. Create a new Post instance
//    const newPost = new Post1({
//      name: admin.name,
//      email: admin.email,
//      userId: admin._id,
//      title,
//      description,
//      srcProfile: admin.srcProfile,
//      image: {
//       url: result.secure_url,
//       publicId: result.public_id,
//     },
//      date: currentDate,
//      formattedDate
//    });
  
//    // 7.Save the post to the database
//    await newPost.save();

//   // 8. Send response to the client
//    res.json(newPost);
  
//   // 9. Remove image from the server
//   fs.unlinkSync(imagePath);

//     } catch (error) {
//       console.error('Error creating new post:', error);
//       res.status(500).json({ error: 'Internal Server Error while creating new post.' });
//     }
//   };

const newPost = async (req, res) => {
  try {
    console.log('Request received:', req.body);

    const { title, description, userId } = req.body;

    // 1. Validate request body
    if (!title || !description || !userId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // 2. Validation for image
    if (!req.file) {
      return res.status(400).json({ message: "No image provided" });
    }

 // 3. Upload photo
 const imagePath = path.join(__dirname, `../images/${req.file.filename}`);


    let result;
    try {
      result = await cloudinaryUploadImage(imagePath);
      console.log('Cloudinary upload result:', result);
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      return res.status(500).json({ error: `Cloudinary upload error: ${error.message}` });
    }

    // 4. Find the admin by userId
    const admin = await Artical1.findById(userId);
    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }
    console.log('Admin found:', admin);

    // 5. Create the date
    const currentDate = new Date();
    const formattedDate = formatDistanceToNow(currentDate, { addSuffix: true });

    // 6. Create a new Post instance
    const newPost = new Post1({
      name: admin.name,
      email: admin.email,
      userId: admin._id,
      title,
      description,
      srcProfile: admin.image.url,
      image: {
        url: result.secure_url,
        publicId: result.public_id,
      },
      date: currentDate,
      formattedDate
    });

    // 7. Save the post to the database
    await newPost.save();
    console.log('New post created:', newPost);

    // 8. Send response to the client
    res.json(newPost);

    // 9. Remove image from the server
    fs.unlinkSync(imagePath);

  } catch (error) {
    console.error('Error creating new post:', error);
    res.status(500).json({ error: `Internal Server Error while creating new post. ${error.message}` });
  }
};


// const mongoose = require("mongoose");
// const Post = require("../models/post.model"); // Adjust the path to your Post model

// const commentOnPost1 = async (req, res) => {
//   try {
//     const {postId,userId,text,srcProfile,nameC} = req.body;

//     // Ensure userId and postId are ObjectId
//     // const postObjectId = new mongoose.Types.ObjectId(postId);
//     // const userObjectId = new mongoose.Types.ObjectId(userId);

//     // Find the post by its ID and add the new comment
//     const post = await Post1.findById(postId);
//     if (!post) {
//       return res.status(404).json({ error: "Post not found" });
//     }

//     const newComment = {
//       text: text,
//       user: userId,
//       date: new Date(),
//       srcProfile,
//       nameC
//     };

//     // Setting formattedDate before saving
//     newComment.formattedDate = formatDistanceToNow(newComment.date, { addSuffix: true });

//     post.comments.push(newComment);
//     await post.save();

//     res.status(200).json(post);
//   } catch (error) {
//     console.error("Error in commentOnPost controller:", error);
//     res.status(500).json({ error: error.message });
//   }
// };


  const commentOnPost = async (req, res) => {
    try {
      const { text, postId, userId,srcProfile,nameC } = req.body;
  
      if (!text) {
        return res.status(400).json({ error: "Text field is required" });
      }
  
      // Validate and find post by its ID
      const post = await Post1.findById(postId);
  
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

module.exports={getAllPost,deletePost,getPost,newPost,commentOnPost}