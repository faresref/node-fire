const jwt = require("jsonwebtoken")

const verfytoken = (req,res,next)=>{
const token = req.header("authorization")
if(!token){
    return res.status(401).json({messageT:"the token not found"})}
   try {
    const decoded = jwt.verify(token,'your_secret_key')
    req.user = decoded
    console.log(decoded)
   next()
} catch (error) {
    res.status(401).json({messageT:"the token ivalid"})
}     

}
module.exports=verfytoken

