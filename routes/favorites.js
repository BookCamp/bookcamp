const express = require('express');
const router = express.Router();
const ensureLogin = require("connect-ensure-login");
const Posts = require("../models/Post.model")
const School = require("../models/School.model")
const User = require("../models/User")

/* GET home page */
router.post('/', (req, res) => {
    let favPost = req.body;
    console.log("Hola")
    User.findByIdAndUpdate(req.user._id, { $push: { favoritePosts: favPost.id } })
        .then(() => res.json({ ok: true }))
        .catch((err) => res.json(err))
});

router.get('/feed', (req, res, next) => {
    console.log(req.user.favoritePosts)
    User.findById(req.user._id)
        .populate({
            path: 'favoritePosts',
            model: 'Post',
            populate: {
                path: 'school',
                path: 'creator'
            },
        })
        // .populate('creator')
        // .populate('school')
        .then(userFound => {
            let favoritePosts = userFound.favoritePosts
            console.log(favoritePosts)
            res.render("favoritesFeed", { favoritePosts })
        })
})


module.exports = router;