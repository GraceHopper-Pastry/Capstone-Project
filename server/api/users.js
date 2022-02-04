const router = require("express").Router();
const passport = require("passport");
const {
  models: { User },
} = require("../db");
const requireToken = require("./authmiddleware");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    console.log(requireToken);
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "email"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

//need this to be a different route
router.get("/mentors/:intakeScore", async (req, res, next) => {
  try {
    const mentors = await User.findAll({
      where: {
        intakeScore: parseInt(req.params.intakeScore),
        isMentor: true,
      },
    });
    res.json(mentors);
  } catch (err) {
    next(err);
  }
});

//GET SINGLE USER
//will this route be protected?
router.get("/:id", async (req, res, next) => {
  try {
    const users = await User.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "firstName", "lastName", "email"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// DELETE SINGLE USER
router.get("/:id", async (req, res, next) => {
  try {
    const userToDelete = await User.findByPk(req.params.id);
    await userToDelete.destroy();
    res.json(userToDelete);
  } catch (err) {
    next(err);
  }
});

// ADD NEW USER
router.post("/", async (req, res, next) => {
  try {
    res.json(await User.create(req.body));
  } catch (error) {
    next(error);
  }
});

// UPDATE SINGLE USER
//need to add require token here, and change req.params.id to req.user.id from REQUIRETOKEN
router.put("/", requireToken, async (req, res, next) => {
  try {
    const userId = req.user.id;
    console.log(`user:`, req.user, `update`, req.body);
    const userToUpdate = await User.findByPk(userId);
    res.json(await userToUpdate.update(req.body));
  } catch (error) {
    next(error);
  }
});
