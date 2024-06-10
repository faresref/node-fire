//import user modul or artical
const Artical1 =  require('../models/user.model')
const Post1 =  require('../models/post.model')

const { formatDistanceToNow } = require('date-fns');

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