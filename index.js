const express = require("express")
const {
    engine
} = require("express-handlebars")
const app = express()

const path = require("path")

app.use(express.static(path.join(__dirname, "/static")))

app.engine(".hbs", engine({
    extname: ".hbs",
    defaultLayout: 'main'
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

//error handling
app.use((req, res) => {
    res.status(404).send("Sorry, this page doesn't exist!")
})

//port
app.listen(3000)