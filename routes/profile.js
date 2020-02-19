const express = require('express');
const router = express.Router();
const ensureLogin = require("connect-ensure-login");
const User = require("../models/User");

router.get('/:userID', (req, res, next) => {
    User.findById(req.params.userID).then(user => {
        console.log(user)
        res.render("profile",  user )
    })
})



module.exports = router;