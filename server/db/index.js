//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Offerings = require("./models/Offerings");

//associations could go here!
User.belongsToMany(User, {
  as: "Mentees",
  foreignKey: "mentorId",
  through: "mentors_mentees",
});

Offerings.belongsToMany(User, {
  foreignKey: "s",

  through: "Shop",
});



module.exports = {
  db,
  models: {
    User,
    Offerings,
  },
};
