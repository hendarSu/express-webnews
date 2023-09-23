const express = require("express");
const router = require("./routers/router");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

// built in Middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(router);

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});