
// Middleware to check if token is expired
const checkTokenExpiry = (req, res, next) => {
      
    try {
    const token = req.headers.authorization
    //?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Token not provided' });
    }
      const decoded =  jwt.verify(token, "your-secret-key", (err, user) => {
        err && console.log(err)});
      console.log(decoded)

      if (decoded.exp < Date.now() / 1000) {
        // Token expired, redirect to refresh token endpoint
        return res.redirect('/refresh-token');
      }

      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token 1chec' });
    }
  };
  module.exports = checkTokenExpiry;
