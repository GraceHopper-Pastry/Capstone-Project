const passport = require('passport')
const router = require('express').Router()
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const { models: { User }} = require('../db')
require('dotenv').config()
module.exports = router

const linkedinConfig = {
  clientID: process.env.LINKEDIN_CLIENT_ID,
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
  callbackURL: "http://localhost:8080/auth/linkedin/callback"
}

passport.use(new LinkedInStrategy(linkedinConfig, (token, refreshToken, profile, done) => {
  const linkedinId = profile.id
  const name = profile.displayName
  const email = profile.emails[0].value
  return User.find({where: {linkedinId}})
    .then(user => user
      ? done(null, user)
      : User.create({name, email, linkedinId})
        .then(user => done(null, user))
    )
    .catch(done)
}))
router.get('/', passport.authenticate('linkedin', {scope: 'email'}))
router.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
  successRedirect: '/home',
  failureRedirect: '/login'
}))
