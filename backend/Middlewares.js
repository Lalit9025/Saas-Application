import jwt from 'jsonwebtoken'


export const verifyTokenUserMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(403).json({
            success: false,
            message: 'No token provided'
        });
    }

    const token = authHeader.split(' ')[1]; // Extract token after 'Bearer'

    jwt.verify(token, 'HDUEWFNEJDCDCN838232', (err, decoded) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Failed to authenticate token'
            });
        }
        req.userId = decoded.id;
        next();
    });
};

