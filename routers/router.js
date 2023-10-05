const express = require("express");
const homeRouter = require("./web/home");
const api = require("./api/api");
const router = express.Router();

router.use('/api', api);

router.use('/', homeRouter);
router.use('/', (req, res) => {
    res.render("errors/404");
});

module.exports = router;