const router = require("express").Router();
// eslint-disable-next-line no-unused-vars
const requireToken = require("./authmiddleware");
const {
  models: { User, Message, Relationship },
} = require("../db");
module.exports = router;

// GET all the messages from a specific channel
router.get("/:channelId/messages", async (req, res, next) => {
  try {
    const channelId = req.params.channelId;
    const messages = await Message.findAll({
      where: {
        relationshipId: parseInt(req.params.channelId),
      },
    });
    res.json(messages);
  } catch (err) {
    next(err);
  }
});

//GET conversation based on message recipient of logged-in user

router.get("/channels", requireToken, async (req, res, next) => {
  try {
    const id = req.params.id;
    if (req.user.isMentor === true) {
      const channel = await Relationship.findOne({
        where: {
          menteeId: id,
        },
      });
      res.json(channel);
    } else {
      const channel = await Relationship.findOne({
        where: {
          mentorId: id,
        },
      });
      res.json(channel);
    }
  } catch (err) {
    next(err);
  }
});

// POST /api/chat/messages
router.post("/messages", requireToken, async (req, res, next) => {
  try {
    const id = req.user.id;
    const channel = req.body.channelId;

    const message = await Message.create({
      content: req.body.content,
      userId: id,
      relationshipId: channel,
    });
    //check if you need to change this to an integer
    res.send(message);
  } catch (err) {
    next(err);
  }
});
