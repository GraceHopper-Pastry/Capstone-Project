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
});

module.exports = Offering;
