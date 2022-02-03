const router = require('express').Router()
const passport = require('passport')
const { models: { User }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// router.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile'] }));

// router.get('/oauth2/redirect/accounts.google.com',
//   passport.authenticate('google', { failureRedirect: '/login', failureMessage: true }),
//   function(req, res) {
//     res.redirect('/home');
//   });
