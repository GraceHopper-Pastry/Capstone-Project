//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Shop = require('./models/Shop');

//associations could go here!
User.belongsToMany(User);
User.hasOne(Shop);

module.exports = {
  db,
  models: {
    User,
    Shop,
  },
};
