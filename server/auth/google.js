const passport = require('passport')
const router = require('express').Router()
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const { models: { User }} = require('../db')
require('dotenv').config()
module.exports = router

var TOKEN = "token";
if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  console.log('Google client ID / secret not found. Skipping Google OAuth.')
} else {
const googleConfig = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}

passport.use(new GoogleStrategy(
  googleConfig,
  (token, refreshToken, profile, done) => {
    const googleId = profile.id
    const email = profile.emails[0].value
    const password = '123'
    TOKEN = token;

    User.findOrCreate({
      where: {email},
      defaults: {email, password}
    })
      .then(([user]) => {
        done(null, {user, token})
      })
      .catch(done)
  }
))

router.get('/', passport.authenticate('google', {scope: 'email'})) //[, 'profile']]
// router.get('/callback', passport.authenticate('google', {
//   successRedirect: '/home/' + TOKEN,
//   failureRedirect: '/login'
// }))
let address = '/home/';
router.get('/callback', passport.authenticate('google'), 
// (req, res)=>{
//   if(res){
//     console.log("my first res")
//     console.log(res.token);
//     address = '/home/' + res.token;
//   }
// }), 
(req, res) => {
    console.log("my second res")
    console.log(res.req.user.token);
    res.redirect(address + res.req.user.token);
    //res.redirect('/login');
  })}