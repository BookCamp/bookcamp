const express = require('express');
const router = express.Router();
const ensureLogin = require("connect-ensure-login");
const User = require("../models/User");
router.get('/', (req, res, next) => {
    User.findById(req.user._id)
        .populate("school")
        .then(user => {
            res.render("profile", user)
        })
})
router.get('/:userID', (req, res, next) => {
    User.findById(req.params.userID)
        .populate("user")
        .populate('creator')
        .then(user => {
            res.render("profile", user)
        })
})
module.exports = router;