const router = require('express').Router()
const passport = require('passport')
const { models: { User }} = require('../db')
const requireToken = require('./authmiddleware')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    console.log(requireToken)
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
