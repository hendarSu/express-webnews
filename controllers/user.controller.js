const UserService = require("../services/user.service");

const userService = new UserService();

class UserController {
    indexRegister(req, res) {
        res.render('users/register', {
            layout: "layouts/layouts",
            pageTitle : 'Registration'
        })
    }

    indexLogin(req, res) {
        res.render('users/login', {
            layout: "layouts/layouts",
            pageTitle : 'Login'
        })
    }

    async register(req, res) {
        try {
            await userService.store(req.body);        
            // Tampilkan pesan sukses atau respons yang sesuai
            res.status(201).json({ message: 'Registrasi berhasil' });
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Gagal mendaftar' });
          }
    }
}

module.exports = UserController;