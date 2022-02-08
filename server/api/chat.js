const router = require("express").Router();
// eslint-disable-next-line no-unused-vars
const requireToken = require("./authmiddleware");
const {
  models: { User, Message },
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

// POST /api/chat/messages
router.post("/messages", async (req, res, next) => {
  try {
    const id = req.body.user;
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
