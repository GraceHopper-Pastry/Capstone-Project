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

router.get('/', passport.authenticate('google', {scope: 'email'}))
router.get('/callback', passport.authenticate('google'), (req, res)=>{
  try {
    res.cookie("token", req.user.token);
    res.redirect('/home');
    
  } catch (err) {
    console.log("error:");
    console.log(err)
  }
})

// router.get('/callback', async (req, res) => {
//   try {
//     console.log("my new google route...")
//     console.log(res)
//     //res.send({ token: "234" });
//     // res.json({data: "hi"})

//     res.cookie("token", res.token);
//     // res.send(200);
//     res.redirect('/');
//   } catch (err) {
//     console.log("error:");
//     console.log(err)
//   }
// })


  // return User.find({where: {googleId}})
  //   .then(user => user
  //     ? done(null, user)
  //     : User.create({email, password, googleId})
  //       .then(user => done(null, user))
  //   )
  //   .catch(done)
// }))
// router.get('/', passport.authenticate('google', {scope: 'email'}))
// // router.get('/auth/google/callback', passport.authenticate('google', {
// //   successRedirect: '/home',
// //   failureRedirect: '/login'
// // }))
// // router.get('/', passport.authenticate('google', {scope: 'email'})) //[, 'profile']]
// // router.get('/callback', passport.authenticate('google', {
// //   successRedirect: '/home/' + TOKEN,
// //   failureRedirect: '/login'
// // }))
// let address = '/home/';
// router.get('/callback', passport.authenticate('google', {scope: 'email'}), 
// // (req, res)=>{
// //   if(res){
// //     console.log("my first res")
// //     console.log(res.token);
// //     address = '/home/' + res.token;
// //   }
// // }), 
// (req, res) => {
//     console.log("my second res")
//     console.log(res.req.user.token);
//     // res.json(res);
//     //res.send(200)
//     res.json({data: {token: res.req.user.token}});
//     //res.send(205);
//   })}

// router.get('/callback', passport.authenticate('google'),(req, res)=>{
//     console.log('redirected', req.user)
//     // let user = {
//     //     // displayName: req.user.displayName,
//     //     // name: req.user.name.givenName,
//     //     email: req.user.user.dataValues.email,
//     //     // provider: req.user.provider 
//     //   }
//     //console.log(user)
//     const {email} = req.user;

//     // let token = jwt.sign({
//     //     data: email
//     //     }, res.token, { expiresIn: 60 }); // expiry in seconds
//     //res.cookie('jwt', token)
//     res.redirect('/home')
// })}
}
