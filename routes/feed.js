const express = require('express');
const router = express.Router();
const ensureLogin = require("connect-ensure-login");
const Posts = require("../models/Post.model")
const School = require("../models/School.model")
const User = require("../models/User")

/* GET home page */
router.get("/", ensureLogin.ensureLoggedIn("/"), (req, res, next) => {
    console.log(req.user)
    Posts.find({ $and: [{ school: req.user.school }, { course: req.user.courses[0] }] })

        .populate('school')
        .populate('creator')
        .then(posts => {
            res.render("index", { posts });
        })
});

module.exports = router;