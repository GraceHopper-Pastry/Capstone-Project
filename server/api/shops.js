const router = require('express').Router();
// eslint-disable-next-line no-unused-vars
const passport = require('passport');
const {
  models: { User, Offerings, Shop },
} = require('../db');
const { requireToken, isMentor, isSelfOrMentor, isLoggedIn } = require('./authmiddleware');

module.exports = router;

// GET /api/shops/
router.get('/', requireToken, isLoggedIn, isSelfOrMentor, async (req, res, next) => {
  try {
    const shops = await Shop.findAll({
      attributes: ['title', 'description', '']
    })
    res.json(shops);
  } catch (err) {
    next(err);
  }
});

//need this to be a different route
router.get('/:shopId', async (req, res, next) => {
  try {
    const shop = await Shop.findByPk({
      where: {
        shopId: req.params.shopId,
      },
      attributes: ['shopId', 'name', 'description', 'ownerId']
    });

    const shopOfferings = await shop.getOfferings();

    res.json({shop, shopOfferings});
  } catch (err) {
    next(err);
  }
});

//GET SINGLE USER's SHOP
//will this route be protected?
router.get('/:id', async (req, res, next) => {
  try {
    const users = await User.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'firstName', 'lastName', 'email'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// DELETE SINGLE USER
router.get('/:id', async (req, res, next) => {
  try {
    const userToDelete = await User.findByPk(req.params.id);
    await userToDelete.destroy();
    res.json(userToDelete);
  } catch (err) {
    next(err);
  }
});

// ADD NEW USER
router.post('/', async (req, res, next) => {
  try {
    res.json(await User.create(req.body));
  } catch (error) {
    next(error);
  }
});

// UPDATE SINGLE USER
//need to add require token here, and change req.params.id to req.user.id from REQUIRETOKEN
router.put('/', requireToken, async (req, res, next) => {
  try {
    const userId = req.user.id;
    console.log(`user:`, req.user, `update`, req.body);
    const userToUpdate = await User.findByPk(userId);
    res.json(await userToUpdate.update(req.body));
  } catch (error) {
    next(error);
  }
});
