const NewsService = require("../services/news.service");

const newsService = new NewsService();
class HomeController {

    async indexHome(req, res) {
        try {
            const newsData = await newsService.getNews(null);
            res.render("home",
                {
                    layout: "layouts/layouts",
                    news: newsData,
                    pageTitle: "HOME | Berita Terkini"
                });
        } catch (error) {
            console.log(error);
        }
    }

    async newsDetail(req, res) {
        try {
            const id = req.params.id;
            const newsData = await newsService.getNews(id);
            res.render("home",
                {
                    layout: "layouts/layouts",
                    news: newsData,
                    pageTitle: newsData.title
                });
        } catch (error) {
            console.log(error);
        }
    }

    indexFeedback(req, res) {
        res.render("feedback", { layout: 'layouts/layout', pageTitle: "About" });
    }

    async getNews(req, res) {
        const data = await newsService.getNewsWithRawQuery();
        res.status(200).json(data);
    }

    async storeNews(req, res) {
        const payload = req.body;
        const store = await newsService.store(payload);

        res.status(201).json(store);
    }
}

module.exports = HomeController;