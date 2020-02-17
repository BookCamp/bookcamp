const express = require('express');
const router  = express.Router();


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
module.exports = router;
