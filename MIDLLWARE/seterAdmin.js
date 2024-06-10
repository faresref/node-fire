const seterAdmin = async (req,res,next) =>{

    try{
    const Artical1 =  require('../models/user.model')
    //const id = req.params.Id
    //const currentuser = await Artical1.findById(id)
    //if (!currentuser)
    //{return res.status(404).json({ message: 'User is not found Can not delete' }) }
    
    const tokenAuth  = req.header("authorization")
    //const tokenDb    = currentuser.token
    const isadmin1     = req.user.isadmin     
    if(!isadmin1){return res.status(403).json({ message: "not found" }) }
      if (isadmin1    == false  )
         {return res.status(403).json({ message: "Cannot crud  just the admin" }) }
         next()}
     catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    }
    module.exports=seterAdmin