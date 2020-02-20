const express = require('express');
const router = express.Router();
const ensureLogin = require("connect-ensure-login");
const User = require("../models/User");
const uploadCloud = require('../config/cloudinary.js');


//Edit

router.get('/', (req, res, next) => {

    console.log(req.user)
    User.findById(req.user._id)
        .then(user => {
            console.log(user)
            res.render("edit", user)
        })
})

router.post('/', uploadCloud.single('photo'), (req, res, next) => {

    const { photo, username, birthdDate, school, course, email } = req.body
    //en base al req.body, definir userToUpdate
    let userToUpdate = { photo, username, email }
    let userID = req.user._id
    console.log(userID)
    User.findByIdAndUpdate(req.user._id, userToUpdate)
        .then(userUpdated => {
            res.redirect("/feed/user")
        })
        .catch(err => console.log(err))
})


router.get("/delete/:userId", (req, res) => {
    console.log("ENTRA")
    User.findByIdAndDelete(req.params.userId)
    .then(userDelete => {
        res.redirect("/")
    })
        .catch(err => console.log(err))
})

module.exports = router;