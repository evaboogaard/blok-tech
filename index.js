require('dotenv').config();

const express = require("express");
const {
    engine
} = require("express-handlebars");
const app = express();

const path = require("path");
// const slug = require("slug");
const bodyParser = require("body-parser");
const router = express.Router();
const port = process.env.PORT || 1337;

const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);


app.use(express.static(path.join(__dirname, "/static")));
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

// basic routing
app.get("/", (req, res) => {
    res.render("createaccount", {
        "title": "create account"
    });
});

app.post('/', (req,res)=> {
    console.log(req.body)
})

app.get("/login", (req, res) => {
    res.render("login", {
        "title": "login"
    });
});

app.get("/account", (req, res) => {
    res.render("account", {
        "title": "account"
    });
});

app.post("/account", (req, res) => {
    res.render("account", {
        firstname: req.body.fname,
        lastname: req.body.lname,
        country: req.body.country
    });

})

//error handling
app.use((req, res) => {
    res.status(404).send("Sorry, this page doesn't exist!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = router;