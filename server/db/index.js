//this is the access point for all things database related!

const db = require('./db');
const Sequelize = require('sequelize');

const User = require('./models/User');
const Offerings = require('./models/Offerings');

const mentors_mentees = db.define('mentors_mentees', {
  mentorId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  menteeId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
});

//associations could go here!
User.belongsToMany(User, {
  as: 'Mentees',
  foreignKey: 'mentorId',
  through: 'mentors_mentees',
});

User.belongsToMany(User, {
  as: 'Mentors',
  foreignKey: 'menteeId',
  through: 'mentors_mentees',
});

User.belongsToMany(Offerings, {
  through: 'Shop',
});

module.exports = {
  db,
  models: {
    User,
    Offerings,
    mentors_mentees,
  },
};
