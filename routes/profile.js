const express = require('express');
const router = express.Router();
const ensureLogin = require("connect-ensure-login");
const User = require("../models/User");


router.get('/', (req, res, next) => {
    User.findById(req.user._id)
    .then(user=> {
        res.render("profile", user)
    })
})

router.get('/:userID', (req, res, next) => {
    console.log("aqui")
    User.findById(req.params.userID)
    .populate("school")
    .then(user => {
        console.log(user)
        res.render("profile",  user )
    })
 })

module.exports = router;