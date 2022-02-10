const {
  models: { User },
} = require("../db");

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    console.log("reqToken");
    req.user = user;
    next();
  } catch (e) {
    next(e);
  }
};

const isLoggedIn = async (req, res, next) => {
  if (!!req.user) next()
  else throw new Error('User is not logged in!');
  res.redirect('/');
}

const isMentor = async (req, res, next) => {
  if (!!req.user && !!req.user.isMentor) next()
  else throw new Error(`${req.user} is not a Mentor!`)
  res.redirect(`/users/${req.user.id}`);
}

const isSelfOrMentor = async (req, res, next) => {
  if (req.params.id === req.user.id || req.user.isMentor) next()
  res.redirect('/') // check against Jills routes
}

module.exports = {
  requireToken,
  isLoggedIn,
  isMentor,
  isSelfOrMentor
}
