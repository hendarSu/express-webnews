const { user } = require('../models');

class UserService {
    async store(payload) {
        const date = new Date();
        const { name, email, password } = payload;
        // Simpan data pengguna ke database
        const data = await user.create({ name, email, password, createdAt: date, updatedAt: date });
        return data;
    }
}

module.exports = UserService;