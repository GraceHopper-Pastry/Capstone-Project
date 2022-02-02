const Sequelize = require('sequelize');
const db = require('../db');

const Shop = db.define('shop', {
  chat: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  advice: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  liveQandA: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Shop;
