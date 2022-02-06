const Sequelize = require("sequelize");
const db = require("../db");
const  User = require("./User");

const Shop = db.define("shop", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  }
});

module.exports = Offering;

