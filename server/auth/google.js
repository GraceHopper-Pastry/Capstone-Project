// const passport = require('passport')
// const router = require('express').Router()
// const GoogleStrategy = require('passport-google-oauth2').Strategy
// const { models: { User }} = require('../db')
// require('dotenv').config()
// module.exports = router

// const googleConfig = {
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: "http://localhost:8080/auth/google/callback"
// }

// passport.use(new GoogleStrategy(googleConfig, (token, refreshToken, profile, done) => {
//   const googleId = profile.id
//   const name = profile.displayName
//   const email = profile.emails[0].value
//   return User.find({where: {googleId}})
//     .then(user => user
//       ? done(null, user)
//       : User.create({name, email, googleId})
//         .then(user => done(null, user))
//     )
//     .catch(done)
// }))
// router.get('/', passport.authenticate('google', {scope: 'email'}))
// router.get('/auth/google/callback', passport.authenticate('google', {
//   successRedirect: '/home',
//   failureRedirect: '/login'
// }))