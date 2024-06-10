 const seter = async (req,res,next) =>{

try{
const Artical1 =  require('../models/user.model')
const id = req.params.id
const currentuser = await Artical1.findById(id)
 if (!currentuser)
{return res.status(404).json({ message: 'User is not found Can not delete' }) }

const tokenAuth  = req.header("authorization")
const tokenDb    = currentuser.token
const userid     = req.user.userId     
console.log(userid)
console.log('id is',id)
  if (userid    !== id     
  &&  tokenAuth !== tokenDb )
     {return res.status(403).json({ message: "Cannot delete another user's account" }) }
     next()
  }catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
module.exports=seter
// const Artical1 = require('../models/artical');

// const seter = async (req, res, next) => {
//   const id = req.params.Id;

//   try {
//     const currentuser = await Artical1.findById(id);

//     if (!currentuser) {
//       return res.status(404).json({ message: 'User is not found. Cannot delete.' });
//     }

//     const tokenAuth = req.header('authorization');
//     const tokenDb = currentuser.token;
//     const userid = req.user.userId;

//     if (userid !== id || `Bearer ${tokenAuth}` !== tokenDb) {
//       return res.status(403).json({ message: "Cannot delete another user's account" });
//     }

//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// module.exports = seter;
