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
      const channelId = channel.id;

      const messages = await Message.findAll({
        where: {
          relationshipId: channelId,
        },
      });
      res.json({ messages: messages, channel: channelId });
    } else {
      const recipient = parseInt(req.params.recipientId);
      const channel = await Relationship.findOne({
        where: {
          mentorId: recipient,
          menteeId: userId,
        },
      });
      const channelId = channel.id;
      console.log({ channel });
      const messages = await Message.findAll({
        where: {
          relationshipId: channelId,
        },
      });
      console.log({ messages });
      res.json({ messages: messages, channel: channelId });
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
    console.log(`request.body`, req.body);
    console.log(req.body.relationshipId, typeof req.body.relationshipId);
    const id = Number(req.user.id);
    const channel = Number(req.body.relationshipId);

    console.log({ channel });

    const message = await Message.create({
      content: req.body.content,
      userId: id,
      relationshipId: channel,
    });

    // let relationship = await Relationship.findByPk(channel);
    // await relationship.setMessages(message.id);
    //check if you need to change this to an integer
    res.send(message);
  } catch (err) {
    next(err);
  }
});
