const passport = require('passport')
const router = require('express').Router()
const TwitterStrategy = require('passport-twitter').Strategy;
const { models: { User }} = require('../db')
require('dotenv').config()
module.exports = router

var TOKEN = "token";
if (!process.env.TWITTER_CONSUMER_KEY || !process.env.TWITTER_CONSUMER_SECRET) {
  console.log('twitter client ID / secret not found. Skipping Twitter OAuth.')
} else {
const twitterConfig = {
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: "http://www.localhost:8080/auth/twitter/callback"
}

passport.use(new TwitterStrategy(twitterConfig, (token, refreshToken, profile, done) => {
  const email = profile.emails[0].value
    const password = '123'
    TOKEN = token;

    User.findOrCreate({
      where: {email},
      defaults: {email, password}
    })
      .then(([user]) => {
        const jwt  = user.generateToken();
        console.log("generated token")
        console.log(token)
        done(null, {user, token: jwt});
      });
}))
router.get('/auth/twitter', passport.authenticate('twitter', {scope: 'email'}))
router.get('/auth/twitter/callback', passport.authenticate('twitter', (req, res)=>{
  try {
    res.cookie("token", req.user.token);
    res.redirect('/home');
    
  } catch (err) {
    console.log("error:");
    console.log(err)
  }
}))
}
