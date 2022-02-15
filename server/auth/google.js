const passport = require("passport");
const router = require("express").Router();
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const {
  models: { User },
} = require("../db");
require("dotenv").config();
module.exports = router;

var TOKEN = "token";
if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  console.log("Google client ID / secret not found. Skipping Google OAuth.");
} else {
  const googleConfig = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // callbackURL: "/auth/google/callback",
    callbackURL: "https://gracehoppercapstone.herokuapp.com/auth/google/callback",
  };

  passport.use(
    new GoogleStrategy(googleConfig, (token, refreshToken, profile, done) => {
      const email = profile.emails[0].value;
      const password = "123";
      TOKEN = token;

      User.findOrCreate({
        where: { email },
        defaults: { email, password },
      }).then(([user]) => {
        const jwt = user.generateToken();
        console.log("generated token");
        console.log(token);
        done(null, { user, token: jwt });
      });
    })
  );

  router.get("/", passport.authenticate("google", { scope: "email" }));
  router.get("/callback", passport.authenticate("google"), (req, res) => {
    try {
      res.cookie("token", req.user.token);
      res.redirect("/home");
    } catch (err) {
      console.log("error:");
      console.log(err);
    }
  });
}
