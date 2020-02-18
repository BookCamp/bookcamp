const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const Student = require("../models/Student.model")
const School = require("../models/School.model")



/* GET home page */
router.get("/", (req, res, next) => {
  res.render("login");
});

// log user
router.post("/login", (req, res, next) => {
  if (req.body.email.trim() === "" || req.body.password.trim() === "") {
    res.json({
      error: true,
      msg: "Username or password are empty"
    });

    return;
  }

  Student.findOne({ email: req.body.email }).then((foundUser) => {
    if (foundUser) {
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        // user is ok and password is ok
        res.json({
          error: false,
          msg: "loged!",
          when: new Date()
        });
      } else {
        // user is ok but password is ok
        res.json({
          error: true,
          msg: "Password is incorrect"
        });
      }
    } else {
      res.json({
        error: true,
        msg: "User not found"
      });
    }
  });
});


// Sign up
router.get("/sign-up", (req, res, next) => {
  School.find()
  .then(schools => {
   res.render("sign-up", {schools}); 
  })
  
});



//Home
router.get("/feed", (req, res, next) => {
  res.render("feed");
});


// User
router.get("/user-panel", (req, res, next) => {
  res.render("user");
});

//Events
router.get("/events", (req, res, next) => {
  res.render("events");
});

//OneEven
router.get("/oneEvent", (req, res, next) => {
  res.render("oneEvent");
});

module.exports = router;
