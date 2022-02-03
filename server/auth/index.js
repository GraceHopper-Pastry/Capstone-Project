const router = require('express').Router()
const { models: {User} } = require('../db')
module.exports = router

router.post('/login', (req, res, next) => {
  try {
    const { email, password } = req.body;
    res.send({ token: await User.authenticate({ email, password }) });
  } catch (err) {
    next(err);
  }
})

router.post('/signup', (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
})

// router.post('/logout', (req, res) => {
//   req.logout()
//   res.redirect('/')
// })

router.get('/me', (req, res) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
})

router.use('/google', require('./google'))
router.use('/twitter', require('./twitter'))
router.use('/linkedin', require('./linkedin'))
