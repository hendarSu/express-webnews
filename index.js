require('dotenv').config();

const express = require("express");
const router = require("./routers/router");
const morgan = require("morgan");
const app = express();
const port = 3000;
const path = require('path');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');
const passport = require('./libs/passport');

const { CyclicSessionStore } = require("@cyclic.sh/session-store");

const ejsLayouts = require('express-ejs-layouts');

// built in Middleware
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
// proses inisasi middleware atuh
app.use(cookieParser());
app.use(flash());
app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUninitialized: false,
  store: new CyclicSessionStore(
    {
      table: {
        name: process.env.CYCLIC_DB,
      },
      keepExpired: false,
      touchInterval: 30000, 
      ttl: 86400000
    }
  )
}));
app.use(passport.initialize());
app.use(passport.session());
// end proses inisiasi middleware.

app.use(morgan('dev'));

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(ejsLayouts);

// Config folder layouts
app.set('layout', 'layouts/layouts');
app.set('layout extractScripts', true);

// SET bower
app.use(express.static('bower_components'));

// set public folrder
app.use(express.static('public'));

app.use(router);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});