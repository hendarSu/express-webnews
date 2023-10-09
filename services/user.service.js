const { user } = require('../models');
const bcrypt = require('bcrypt');

class UserService {
    async store(payload) {
        const date = new Date();
        const { name, email, password } = payload;
        const encript = await bcrypt.hash(password, 10);
        // Simpan data pengguna ke database
        const data = await user.create({ name, email, password: encript, createdAt: date, updatedAt: date });
        return data;
    }
}

module.exports = UserService;