const router = require("express").Router();
// eslint-disable-next-line no-unused-vars
const requireToken = require("./authmiddleware");
const {
  models: { User, Message, Relationship },
} = require("../db");
module.exports = router;

// GET all the messages from a specific channel
router.get("/:recipientId/messages", requireToken, async (req, res, next) => {
  try {
    let user = req.user;
    let userId = parseInt(user.id);
    if (user.isMentor) {
      const recipient = parseInt(req.params.recipientId);
      const channel = await Relationship.findOne({
        where: {
          menteeId: recipient,
          mentorId: userId,
        },
      });

      const messages = await Message.findAll({
        where: {
          relationshipId: channel.id,
        },
        // include: [
        //   {
        //     model: Relationship,
        //     attributes: ["id"],
        //     attributes: ["relationshipId"],
        //   },
        // ],
      });
      res.send(messages);
    } else {
      const recipient = parseInt(req.params.recipientId);
      const channel = await Relationship.findOne({
        where: {
          mentorId: recipient,
          menteeId: userId,
        },
      });
      console.log({ channel });
      const messages = await Message.findAll({
        where: {
          relationshipId: channel.id,
        },
        // include: [
        //   {
        //     model: Relationship,
        //     attributes: ["id"],
        //     through: { attributes: ["relationshipId"] },
        //     required: true,
        //   },
        // ],
      });
      console.log({ messages });
      res.send(messages);
    }
  } catch (err) {
    next(err);
  }
});

//GET conversation based on message recipient of logged-in user

router.get("/:id", requireToken, async (req, res, next) => {
  try {
    const id = Number(req.params.id);
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
