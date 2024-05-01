const jwt = require('jsonwebtoken');
const Artical1 =  require('../models/artical')

// Middleware function to refresh tokens
const refreshTokenMiddleware = async(req, res, next) => {
    // Extract token from request (e.g., from headers or cookies)
    const refreshToken = req.headers['authorization'];

    // Check if token exists
    if (!refreshToken) {
        return res.status(401).json({ message: 'No refresh token provided' });
    }

    // Verify the refresh token
    jwt.verify(refreshToken, 'your_secret_key', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid refresh token' });
        }

        // Generate new access token with extended expiration time
        const newAccessToken = jwt.sign({ userId: decoded.userId }, 'your_secret_key', { expiresIn: '1s' });

        // Attach the new access token to the response headers
        res.setHeader('Authorization', newAccessToken);

        res.status(200).json({ message: 'Token refreshed successfully',newAccessToken });


        // Continue with the next middleware or route handler
        next();
    });
};

module.exports = refreshTokenMiddleware;
