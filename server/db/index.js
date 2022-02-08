//this is the access point for all things database related!

const db = require("./db");
const Sequelize = require("sequelize");

const User = require("./models/User");
const Offerings = require("./models/Offerings");
const Message = require("./models/Message");

const Relationship = db.define("relationship", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoInvrement: true,
    allowNull: false,
  },
  mentorId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
  menteeId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
});

//associations could go here!
User.belongsToMany(User, {
  as: "Mentees",
  foreignKey: "mentorId",
  through: "relationship",
});

User.belongsToMany(User, {
  as: "Mentors",
  foreignKey: "menteeId",
  through: "relationship",
});

User.belongsToMany(Offerings, {
  through: "Shop",
});

Message.belongsTo(Relationship);
Relationship.hasMany(Message);

User.hasMany(Message);
Message.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Offerings,
    Relationship,
    Message,
  },
};
