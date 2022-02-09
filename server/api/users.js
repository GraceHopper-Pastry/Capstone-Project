const router = require("express").Router();
// eslint-disable-next-line no-unused-vars
const passport = require("passport");
const {
  models: { User },
} = require("../db");
const requireToken = require("./authmiddleware");

module.exports = router;

router.get("/", requireToken, async (req, res, next) => {
  try {
    console.log("requireToken");
    // const users = await User.findAll({
    //   // explicitly select only the id and username fields - even though
    //   // users' passwords are encrypted, it won't help if we just
    //   // send everything to anyone who asks!
    //   attributes: ['id', 'email']
    // })
    // res.json(users)
    const userId = req.user.id;
    const user = await User.findByPk(userId, {
      include: ["Mentees", "Mentors"],
    });
    res.json(user);
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
    const userToUpdate = await User.findByPk(userId, {
      include: ["Mentees", "Mentors"],
    });

    console.log(req.body);
    res.json(await userToUpdate.update(req.body));
  } catch (error) {
    next(error);
  }
});
