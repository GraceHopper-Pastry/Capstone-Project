const Sequelize = require("sequelize");
const db = require("../db");

const Offering = db.define("offering", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  sessionLength: {
    type: Sequelize.TIME,
    defaultValue: '00:00:00',
    field: 'hour'
  }
});

module.exports = Offering;
