const express = require("express");
const homeRouter = require("./web/home");
const api = require("./api/api");
const authRouter = require("./web/auth");
const router = express.Router();

router.use('/api', api);

router.use('/api', (req, res) => {
    res.status(404).json({
        message : "Halaman tidak ditemukan"
    });
});

router.use('/', homeRouter);
router.use('/', authRouter);
router.use('/', (req, res) => {
    res.render("errors/404");
});

module.exports = router;