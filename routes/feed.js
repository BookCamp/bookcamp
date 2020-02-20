const express = require('express');
const router = express.Router();
const ensureLogin = require("connect-ensure-login");
const Posts = require("../models/Post.model")
const School = require("../models/School.model")
const User = require("../models/User")

/* GET home page */
router.get("/", ensureLogin.ensureLoggedIn("/"), (req, res, next) => {
    Posts.find({ $and: [{ school: req.user.school }, { course: req.user.courses[0] }] })
        .sort({ updatedAt: -1 })
        .populate('school')
        .populate('creator')
        .populate('comments.creator')
        .then(posts => {
            res.render("index", { posts });
        })
});


router.get('/user', (req, res, next) => {
    Posts.find({ creator: req.user._id })
        .populate('creator')
        .populate('school')
        .then(postsFound => {
            res.render("userPost", { postsFound })
        })

})
module.exports = router;