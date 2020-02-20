const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const School = require("../models/School.model");
const nodemailer = require("nodemailer")

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

// Log In
router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error"), layout: false });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/feed",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));

//Log In with Google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email"
    ]
  })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/feed",
    failureRedirect: "/auth/login" // here you would redirect to the login page using traditional login approach
  })
);


//Sign Up
router.get("/signup", (req, res, next) => {
  School.find()
    .then(schools => {
      res.render("auth/signup", { schools, layout: false });
    })

});
router.post("/signup", (req, res, next) => {
  //Nodemailer
  const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let token = '';
  for (let i = 0; i < 25; i++) {
    token += characters[Math.floor(Math.random() * characters.length)];
  }

  console.log(req.body)
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const school = req.body.school;
  const courses = req.body.courses;
  const confirmationCode = token;

  if (username === "" || password === "" || email === "" || school === "" || courses === "") {
    res.render("auth/signup", { message: "All fields are required" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      email,
      confirmationCode,
      school: [school],
      courses: [courses]
    });

    newUser.save()
      .then(() => {
        res.redirect("/");
      })
      .catch(err => {
        res.render("auth/signup", { message: err });
      })


    //Nodemailer
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'daniel.ronhacker@gmail.com',
        pass: 'Almeria15'
      }
    });

    transporter.sendMail({
      from: "My Awesome Project ",
      to: 'daniel.ronhacker@gmail.com',
      subject: `lab-nodemailer`,
      text: `esto es Nodemailer`,
      //change url and text
      html: `<a href="http://localhost:3000/auth/confirm/${confirmationCode}">Esta es Nodemailer</a>`
    })
      .then(info => res.render('message', {
        email,
        subject,
        message,
        info
      }))
      .catch(error => console.log(error));
  });
});

router.get('/confirm/:confirmCode', (req, res, next) => {
  let cCode = req.params.confirmCode
  User.findOneAndUpdate({ confirmationCode: cCode }, { status: 'Active' })
    .then(() => {
      res.render('auth/confirmation')
    })
})


router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
