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

//GET MENTOR MATCHES
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

/////////THIS WORKS FOR MENTOR ASSIGNMENT
// router.put('/', requireToken, async (req, res, next) => {
//   try {
//     const userId = req.user.id;
//     const userToUpdate = await User.findByPk(userId);
//     const newUser = await userToUpdate.setMentors(req.body.Mentors[0].id);
//     console.log('UPDATE SING USR', newUser);
//     res.json(newUser);
//   } catch (error) {
//     next(error);
//   }
// });

router.put("/", requireToken, async (req, res, next) => {
  try {
    const userId = req.user.id;
    const userToUpdate = await User.findByPk(userId);
    if (req.body.Mentors) {
      const newUser = await userToUpdate.setMentors(req.body.Mentors[0].id);
      res.json(newUser);
    } else {
      const newUser = await userToUpdate.update(req.body);
      res.json(newUser);
    }
  } catch (error) {
    next(error);
  }
});

///////////////////ORIGINAL PUT ROUTE///////////////////

// router.put('/', requireToken, async (req, res, next) => {
//   try {
//     const userId = req.user.id;
//     const userToUpdate = await User.findByPk(userId);
//     const newUser = await userToUpdate.update(req.body);
//     console.log('UPDATE SING USR', newUser);
//     res.json(newUser);
//   } catch (error) {
//     next(error);
//   }
// });
