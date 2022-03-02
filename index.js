const express = require("express")
const { engine } = require("express-handlebars")
const app = express()

// const path = require('path');

app.engine('.hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main'
}));

app.set('view engine', '.hbs');
app.set("views", "./views");

app.get('/', (req, res) => {
  res.render('home');
});

//error handling
app.use((req, res) => {
    res.status(404).send("Sorry, this page doesn't exist!")
  })

//port
app.listen(3000)