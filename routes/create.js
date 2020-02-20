const uploadCloud = require('../config/cloudinary.js');
const express = require('express');
const router = express.Router();
const ensureLogin = require("connect-ensure-login");
const Post = require("../models/Post.model");


router.get('/', (req, res, next) => {
  res.render('create');
});

router.post("/", uploadCloud.single('photo'), (req, res, next) => {

  const { comment, photo, file, url, type, title } = req.body
  const { school, courses } = req.user


  const imgPath = req.file.url;

  console.log(req)
  let newPost = {}
  console.log(type)
  switch (type) {
    case "comment":
      newPost = {
        type: "Comment",
        title,
        school,
        course: courses[0],
      }
      break;
    case "photo":
      newPost = {
        type: "Photo",
        title,
        school,
        course: courses[0],
        imgPath,
      }
      break;
    case "file":
      newPost = {
        type: "File",
        title,
        school,
        course: courses[0],
      }
      break;
    case "url":
      newPost = {
        type: "URL",
        title,
        school,
        course: courses[0],
      }
      break;
  }


  Post.create(newPost)
    .then(() => {
      res.redirect("/feed");
    })
    .catch(err => {
      res.render("create", { message: err });
    })
});




module.exports = router;