const passport = require('passport')
const router = require('express').Router()
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const { models: { User }} = require('../db')
require('dotenv').config()
module.exports = router

var TOKEN = "token";
if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  console.log('Google client ID / secret not found. Skipping Google OAuth.')
} else {
const linkedinConfig = {
  clientID: process.env.LINKEDIN_CLIENT_ID,
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
  // callbackURL: "http://localhost:8080/auth/linkedin/callback",
  callbackURL: "https://gracehoppercapstone.herokuapp.com/auth/linkedin/callback",
  scope: ['r_emailaddress', 'r_liteprofile'],
  profileFields: ['email-address'],    
  state: true 
}

passport.use(new LinkedInStrategy(linkedinConfig, (token, refreshToken, profile, done) => {
  console.log("profile:" +profile)
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
  }
))
router.get('/', passport.authenticate('linkedin'))
router.get('/callback', passport.authenticate('linkedin'), (req, res)=>{
  try {
    res.cookie("token", req.user.token);
    res.redirect('/home');
    
  } catch (err) {
    console.log("error:");
    console.log(err)
  }
})
}
