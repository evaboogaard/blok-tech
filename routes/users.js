const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/user");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt")
const saltRounds = 10;

let session;

app.use(bodyParser.urlencoded({
    extended: true
}));

router.get('/createaccount', (req, res) => res.render('createaccount'))

router.post("/createaccount", async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const user = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: hashedPassword,
        discipline: req.body.discipline
    });

    user.save((error) => {
        if (error) {
            console.error(error);
            return res.status(500).redirect('createaccount');
        } else {
            console.log("Account aangemaakt!")
            session = req.session;
            session.email = req.body.email;
            return res.render("account", {
                name: user.fname + " " + user.lname,
                email: user.email,
                discipline: user.discipline
            });
        }
    });
});

router.post('/login', async (req, res) => {
    try {
        const getUser = await User.findOne({ email: req.body.email });
        if (getUser) {
          const comparePassword = await bcrypt.compare(req.body.password, getUser.password);
          if (comparePassword) {
            console.log("It's a great success!");
            session = req.session;
            session.email = req.body.email;
            return res.status(200).redirect('/account');
          } else {
            console.error("Wrong e-mail or password!");
            return res.status(404).redirect('/login');
          }
        } else {
            console.error("Wrong e-mail or password!!");
            return res.status(404).redirect('/login');
        }
    } catch (error) {
        console.error(error);
        return res.status(500).redirect('/login');
    }
});



// Deleton

router.post('/delete', (req, res) => {
    // User.deleteOne({
    //     id: req.body._id
    // });
    // res.redirect('/delete');

    // const email = req.body.email;

    // User.findOneAndDelete({
    //     email: email
    // })

    User.findOneAndDelete({id: req.body._id }).then(
        res.redirect('/delete')
    ).catch((error) => {
        res.status(400).json({
            error: error
        });
    })
});



module.exports = router;