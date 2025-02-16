const jwt = require('jsonwebtoken');
const blacklist = require('../config/blacklist');

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ error: 'No token provided' });
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({ error: 'Invalid token format' });
    }

    const token = parts[1];
    
    if (blacklist.includes(token)) {
        return res.status(401).json({ error: 'Invalid token' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }

        req.userId = decoded.id;
        next();
    });
};