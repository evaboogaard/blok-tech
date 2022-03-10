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


// Getting all
router.get("/", async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
});



// Getting one
// router.get("/:id", getUser, (req, res) => {
//     res.json(res.user)
// });

// app.post('/', (req,res)=> {
//     console.log(req.body)
// })

// Creating one
router.post("/", async (req, res) => {
    const user = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        date: req.body.date,
        country: req.body.country
    })
    console.log('it works')

    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
});

// Updating one
// router.patch("/:id", getUser, async (req, res) => {
//     if(req.body.fname != null){
//         res.user.fname = req.body.fname
//     }
//     if(req.body.lname != null){
//         res.user.lname = req.body.lname
//     }
//     if(req.body.email != null){
//         res.user.email = req.body.email
//     }
//     if(req.body.password != null){
//         res.user.password = req.body.password
//     }
//     if(req.body.date != null){
//         res.user.date = req.body.date
//     }
//     if(req.body.country != null){
//         res.user.country = req.body.country
//     }
//     try{
//         const updatedUser = await res.user.save()
//         res.json(updatedUser)
//     } catch (err) {
//         res.status(400).json({message: err.message})
//     }
// });

// Deleting one
// router.delete("/:id", getUser, async (req, res) => {
//     try {
//         await res.user.remove()
//         res.json({message: "deleted user"})
//     } catch (err) {
//         res.status(500).json({
//             message: err.message
//         })
//     }
// });

// async function getUser(req, res, next) {
//     let user
//     try {
//         user = await User.findById(req.params.id)
//         if (user == null) {
//             return res.status(404).json({
//                 message: "cannot find user"
//             })
//         }
//     } catch (err) {
//         return res.status(500).json({
//             message: err.message
//         })
//     }
//     res.user = user
//     next()
// }

module.exports = router;