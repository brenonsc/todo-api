const { Users } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

class AuthController {
    async login(req, res) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ error: 'Invalid data' });
            }

            const user = await Users.findOne({ where: { email } });
            if (!user || !(await bcrypt.compare(password, user.password_hash))) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }

            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: '1d'
            });

            return res.status(200).json({ token });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new AuthController();