const Sequelize = require('sequelize');
const db = require('../db');

const Offerings = db.define('offerings', {
  chat: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  advice: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  liveQandA: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = Offerings;
