const express = require('express');
const router = express.Router();
const Posts = require("../models/Post.model")

/* GET home page */
router.get('/', (req, res, next) => {
  res.redirect('/auth/login');
});


//search
// router.get('/search', (req, res, next) => {
// let query = req.body.search
// //console.log(query)
// Posts.find({$in: {title:{query}}})
// .then(posts => {
//  res.render("index", {posts} )
// })
// .catch(err => console.log(err))
// })

module.exports = router;
