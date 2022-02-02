//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Shop = require("./models/Shop");

//associations could go here!
//hasMany defines a one to many re
// User.hasMany(User, { foreignKey: "mentorId" });
User.belongsToMany(User, {
  as: "Mentees",
  foreignKey: "mentorId",
  through: "mentors_mentees",
});

//
User.hasOne(Shop);

module.exports = {
  db,
  models: {
    User,
    Shop,
  },
};
