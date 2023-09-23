class HomeController {
    indexHome(req, res) {
        res.render("home");
    }

    indexFeedback(req, res) {
        res.render("feedback");
    }
}

module.exports = HomeController;