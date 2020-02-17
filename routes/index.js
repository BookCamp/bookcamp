const express = require('express');
const router = express.Router();


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("login");
});

router.get("/sign-up", (req, res, next) => {
  res.render("sign-up");
});

router.get("/home", (req, res, next) => {
  res.render("home");
});

router.get("/user", (req, res, next) => {
  res.render("user");
});

router.get("/events", (req, res, next) => {
  res.render("events");
});

router.get("/oneEvent", (req, res, next) => {
  res.render("oneEvent");
});
module.exports = router;
