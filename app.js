require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const axios = require('axios');

const session = require("express-session");
const MongoStore = require('connect-mongo')(session);
const flash = require("connect-flash");
const passport = require('passport');
const User = require("./models/User");




mongoose
  .connect(`${process.env.DBLOCAL}`, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


hbs.registerHelper('ifUndefined', (value, options) => {
  if (arguments.length < 2)
    throw new Error("Handlebars Helper ifUndefined needs 1 parameter");
  if (typeof value !== undefined) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});


// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';


// Enable authentication using session + passport
app.use(session({
  secret: 'irongenerator',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))
app.use(flash());
require('./passport')(app);


//Google Auth
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      // to see the structure of the data in received response:
      console.log("Google account details:", profile);

      User.findOne({ googleID: profile.id })
        .then(user => {
          if (user) {
            done(null, user);
            return;
          }

          User.create({ googleID: profile.id })
            .then(newUser => {
              done(null, newUser);
            })
            .catch(err => done(err)); // closes User.create()
        })
        .catch(err => done(err)); // closes User.findOne()
    }
  )
);


// const imgProgress = document.getElementById('img-bar');
// onUploadProgress(e){
// const progress = (e.loaded * 100) / e.total;
// imgProgress = setAttribute('value'.progress);
// }

const index = require('./routes/index');
app.use('/', index);

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const feedRoutes = require('./routes/feed');
app.use('/feed', feedRoutes);

const profileRoutes = require('./routes/profile');
app.use('/profile', profileRoutes);

const EditRoutes = require('./routes/edit');
app.use('/edit', EditRoutes);

const createRoutes = require('./routes/create');
app.use('/create', createRoutes);

const commentRoutes = require('./routes/comment');
app.use('/comment', commentRoutes);

const favRoutes = require('./routes/favorites');
app.use('/favorites', favRoutes);



module.exports = app;
