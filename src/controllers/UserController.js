const { Users } = require('../models');
const bcrypt = require('bcryptjs');
const blacklist = require('../config/blacklist');

class UserController {
    async store(req, res) {
        try {
            const { name, email, password } = req.body;
            if (!name || !email || !password) {
                return res.status(400).json({ error: 'Invalid data' });
            }
            else if (password.length < 8) {
                return res.status(400).json({ error: 'Password must have at least 8 characters' });
            }
            else if (await Users.findOne({ where: { email } })) {
                return res.status(400).json({ error: 'User already exists' });
            }
            else
            {
                const hashedPassword = await bcrypt.hash(password, 10);
                const user = await Users.create({ name, email, password_hash: hashedPassword });
                return res.status(201).json(user);
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;

            if (req.userId !== parseInt(id, 10)) {
                return res.status(403).json({ error: 'You can only update your own profile' });
            }

            if (!id || !name || !email) {
                return res.status(400).json({ error: 'Invalid data' });
            }

            const user = await Users.findByPk(id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            if (password && password.length < 8) {
                return res.status(400).json({ error: 'Password must have at least 8 characters' });
            }

            if (email !== user.email && await Users.findOne({ where: { email } })) {
                return res.status(400).json({ error: 'Email already in use' });
            }

            const updateData = { name, email };
            if (password) {
                updateData.password_hash = await bcrypt.hash(password, 10);
            }

            await user.update(updateData);
            return res.status(200).json(user);

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;

            if (req.userId !== parseInt(id, 10)) {
                return res.status(403).json({ error: 'You can only delete your own profile' });
            }

            const user = await Users.findByPk(id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const token = req.headers['authorization'].split(' ')[1];
            blacklist.push(token);
            
            await user.destroy();
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new UserController();