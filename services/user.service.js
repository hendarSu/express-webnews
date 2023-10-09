const { user } = require('./../models')

class UserService {
    async store(payload) {
        const date = new Date();
        const { name, email, password } = payload;
        // Simpan data pengguna ke database
        return await user.create({ name, email, password, createdAt: date, updatedAt: date });
    }
}

module.exports = UserService;