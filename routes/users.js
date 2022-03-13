const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/user");
const bodyParser = require("body-parser");
// const passport = require("passport")

app.use(bodyParser.urlencoded({
    extended: true
}));

router.get('/createaccount', (req, res) => res.render('createaccount'))

router.post("/createaccount", (req, res) => {
    const user = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        country: req.body.country
    })
    user.save().then(
        () => {
            res.render("account", {
                name: user.fname + " " + user.lname,
                email: user.email,
                country: user.country
            })
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
});


// inloggon
router.post('/login', (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        User.findOne({
            email: email,
            password: password
        }, function (err, user) {
            if (err) {
                console.log(err);
                return res.status(500).send();
            }

            if (!user) {
                return res.status(404).send("Sorry, user doesn't exist.");
            }
            res.redirect('/account');
        });

    } catch (error) {
        throw new Error(error);
    }
})


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

    User.findOneAndDelete({id: req.body._id }).then();

    res.redirect('/delete');

});


module.exports = router;