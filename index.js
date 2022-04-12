require('dotenv').config();

const express = require("express");
const { engine } = require("express-handlebars");
const session = require('express-session');
const path = require("path");
const bodyParser = require("body-parser");
const router = express.Router();
// const passport = require('passport')

const port = process.env.PORT || 1337;
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);


app.use(express.static(path.join(__dirname, "/static")));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  }))

// supports arrays and objects
app.use(bodyParser.urlencoded({
    extended: true
}));

app.engine(
    "hbs",
    engine({
        layoutsDir: __dirname + "/views/layouts",
        extname: ".hbs",
        defaultLayout: 'main',
        partialsDir: __dirname + "/views/partials",
    }));

app.set('view engine', ".hbs");
app.set("views", "./views");

app.use('/', require('./routes/users'))

// app.use((req, res, next) => {
//     res.locals.currentUser = req.user;
//     next();
//   });

// basic routing
app.get("/", (req, res) => {
    res.render("home", {
        "title": "home"
    });
});

app.get("/account", (req, res) => {
    res.render("account", {
        "title": "account"
    });
});

app.get("/delete", (req, res) => {
    res.render("delete", {
        "title": "delete"
    });
});

app.get("/login", (req, res) => {
    res.render("login", {
        "title": "login"
    });
});

app.get("/chat", (req, res) => {
    res.render("chat", {
        "title": "chat"
    });
});

//error handling
app.use((req, res) => {
    res.status(404).send("Sorry, this page doesn't exist!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = router;