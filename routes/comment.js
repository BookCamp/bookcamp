const express = require('express');
const router = express.Router();
const ensureLogin = require("connect-ensure-login");
const Posts = require("../models/Post.model")
const User = require("../models/User")

router.post('/create', (req, res, next) => {
    console.log(req.body)
    Posts.findOneAndUpdate({ _id: req.body.post }, { $push: { comments: { creator: req.user._id, content: req.body.content } } })
        .then(res.redirect('/feed'));
});


module.exports = router;