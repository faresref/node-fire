const seterpost = async (req,res,next) =>{

    try{

    const post1 =  require('../models/post')
    const artical1 =  require('../models/artical')

    const id = req.params.Id
    const userid     = req.user.userId 

    const currentpost = await post1.findById(id)
     if (!currentpost) {
			return res.status(404).json({ error: 'Post not found' });
		}

    const currentuser = await artical1.findById(currentpost.userId)
     if (!currentuser) {
			return res.status(404).json({ error: 'user not found' });
		}
console.log(currentpost.userId)
        
    const tokenAuth  = req.header("authorization")
    const tokenDb    = currentuser.token
     
    console.log(userid)
    console.log('id is',id)

    // tokenDb!=tokenAuth
	if (userid!=currentpost.userId
        ) {
			return res.status(401).json({ error: 'You are not authorized to delete this post' });
		}
    
         next()
      }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    }
    module.exports=seterpost