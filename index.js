const express = require("express");
const { engine } = require("express-handlebars");
const app = express();

const path = require("path");
// const slug = require("slug");
const bodyParser = require("body-parser");

const port = 3000;



app.use(express.static(path.join(__dirname, "/static")));
app.use(bodyParser.urlencoded({ extended: true }));

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
    res.render("createaccount",{"title": "create account"});
});

app.get("/account", (req, res) => {
    res.render("account");
});

app.post("/account", (req, res) => {
    // .push({
    //     fname: req.body.fname,
    //     country: req.body.country
    // });

    // console.log(req.body.fname);
    // res.redirect("/account");

    res.send("Name:" + req.body.fname + req.body.lname);
})

//error handling
app.use((req, res) => {
    res.status(404).send("Sorry, this page doesn't exist!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });