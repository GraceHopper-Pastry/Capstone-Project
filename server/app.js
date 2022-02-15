const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const session = require("express-session");
const passport = require("passport");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const { db, models } = require("./db");
const sessionStore = new SequelizeStore({ db });
module.exports = app;

// passport registration
passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser(async (muser, done) => {
  try {
    const user = await models.User.findByPk(muser.id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// logging middleware
app.use(morgan("dev"));

// body parsing middleware
app.use(express.json());

// session middleware with passport
app.use(
  session({
    secret: process.env.SESSION_SECRET || "Luna",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// auth and api routes
app.use("/auth", require("./auth"));
app.use("/api", require("./api"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "public/index.html"))
);

// static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

async function bootApp() {
  try {
    await sessionStore.sync();
  } catch (error) {
    console.log(error);
  }
}

bootApp();
// // environment variables config
// require('dotenv').config()

// // passport and express-session
// const session = require('express-session')
// const passport = require('passport')

// // express session middleware
// app.use(session({
//   secret: "secret",
//   resave: false ,
//   saveUninitialized: true,
// }))
// app.use(passport.initialize());
// app.use(passport.session());

// // google authentication
// var GoogleStrategy = require('passport-google-oauth20').Strategy;

// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: '/oauth2/redirect/accounts.google.com'
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));

// passport.serializeUser(function(user, cb) {
//   process.nextTick(function() {
//     cb(null, user);
//   });
// });

// passport.deserializeUser(function(user, cb) {
//   process.nextTick(function() {
//     return cb(null, user);
//   });
// });
