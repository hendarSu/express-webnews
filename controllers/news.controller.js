
class NewsController {
    async createPageNews(req, res) {
        try {
            res.render("news/news-create",
                {
                    pageTitle: "Create News",
                    layout: "layouts/layouts",
                    user: req.user
                });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = NewsController;