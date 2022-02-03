const passport = require('passport')
const router = require('express').Router()
const TwitterStrategy = require('passport-twitter').Strategy;
const { models: { User }} = require('../db')
require('dotenv').config()
module.exports = router

const twitterConfig = {
  consumerKey: process.env.GOOGLE_CLIENT_ID,
  consumerSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:8080/auth/twitter/callback"
}

passport.use(new TwitterStrategy(twitterConfig, (token, refreshToken, profile, done) => {
  const twitterId = profile.id
  const name = profile.displayName
  const email = profile.emails[0].value
  return User.find({where: {twitterId}})
    .then(user => user
      ? done(null, user)
      : User.create({name, email, googleId})
        .then(user => done(null, user))
    )
    .catch(done)
}))
router.get('/', passport.authenticate('twitter', {scope: 'email'}))
router.get('/auth/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/home',
  failureRedirect: '/login'
}))