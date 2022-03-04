const express = require("express")
const { engine } = require("express-handlebars")
const app = express()
const router = express.Router();

const path = require("path")
// const slug = require("slug")
const bodyParser = require("body-parser")


app.use(express.static(path.join(__dirname, "/static")))
app.use(bodyParser.urlencoded({ extended: true }))

app.engine(
    "hbs",
    engine({
        layoutsDir: __dirname + "/views/layouts",
        extname: ".hbs",
        defaultLayout: 'main',
        partialsDir: __dirname + "/views/partials",
    }))

app.set('view engine', ".hbs")
app.set("views", "./views")

// basic routing
app.get("/", (req, res) => {
    res.render("createaccount")
})

app.get("/createaccount2", (req, res) => {
    res.render("createaccount2")
})

app.get("/createaccount3", (req, res) => {
    res.render("createaccount3")
})

router.post('/', function(req, res){
    //Grab the request body
    var body = req.body;
     
    var res_body = {
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email
    };
     
    res.render('account', res_body);
    });
     
    module.exports = router;

// app.get("/account", (req, res) => {
//     res.render("account")
// })

// app.post("/", (req, res) => {
//     data.push({
//         id: id,
//         name: req.body.fname,
//         country: req.body.country
//     })

//     res.redirect("/" + id)

// })

//error handling
app.use((req, res) => {
    res.status(404).send("Sorry, this page doesn't exist!")
})

//port
app.listen(3000)