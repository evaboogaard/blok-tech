const express = require('express')
const app = express()

const handlebars = require("handlebars");

const PORT = process.env.PORT || 1337

app.use('/static', express.static('static'))

app.get('/', onHome)
app.get('/about', onAbout)

app.get('*', error)

function onHome(req, res){
    res.send('<h1>Hello Client</h1>')
};

function onAbout(req, res){
    res.send('<h1>About Me</h1>')
}

function error(req, res){
    res.send('error 404 not found', 404)
}

app.listen(3000)