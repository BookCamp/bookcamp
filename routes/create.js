const uploadCloud = require('../config/cloudinary.js');
const express = require('express');
const router = express.Router();
const ensureLogin = require("connect-ensure-login");
const Post = require("../models/Post.model");


router.get('/', (req, res, next) => {
  res.render('create');
});

router.post("/", uploadCloud.single('photo'), (req, res, next) => {

  const { title, url, text, file, type } = req.body
  //console.log(req.body)
  const { school, courses } = req.user
  // el error esta en la linea de arriba
  //console.log(req.user)
  // const creator = req.user._id
  const photo = req.file.url;
  const creator = req.user._id;
  // const imgName = req.file.originalname;
  console.log(req)
  let newPost = {}
  console.log(type)
  switch (type) {
    case "comment":
      newPost = {
        type: "Comment",
        text,
        school,
        course: courses[0],
        creator
      }
      break;
    case "photo":
      newPost = {
        type: "Photo",
        title,
        school,
        course: courses[0],
        imgPath: photo,
        creator
      }
      break;
    case "file":
      newPost = {
        type: "File",
        title,
        file: photo,
        school,
        course: courses[0],
        creator
      }
      break;
    case "url":
      newPost = {
        type: "URL",
        url,
        title,
        school,
        course: courses[0],
        creator
      }
      break;
  }

  // if (title === "" || photo === "" || file === "" || url === "") {
  //   res.render("create", { message: "All fields are required" });
  //   return;
  // }

  Post.create(newPost)
    .then(() => {
      res.redirect("/feed");
    })
    .catch(err => {
      res.render("create", { message: err });
    })
});




module.exports = router;