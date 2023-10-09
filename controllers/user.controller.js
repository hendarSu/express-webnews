class UserController {
    indexRegister(req, res) {
        res.render('users/register', {
            layout: "layouts/layouts",
            pageTitle : 'Registration'
        })
    }
}

module.exports = UserController;