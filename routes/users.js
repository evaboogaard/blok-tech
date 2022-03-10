const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/user");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

router.get('/', (req, res) => res.render('createaccount'))

// router.post('/', (req, res)=> {
//     console.log(req.body)
// })


// // Getting all
// router.get("/", async (req, res) => {
//     try {
//         const users = await User.find()
//         res.json(users)
//     } catch (err) {
//         res.status(500).json({
//             message: err.message
//         })
//     }
// });

// Creating a user
router.post("/", async (req, res) => {
    const user = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        date: req.body.date,
        country: req.body.country
    })
    res.render("account", {
        name: user.fname + user.lname
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
});

module.exports = router;