const Sequelize = require("sequelize");
const db = require("../db");
const mentors_mentees = require("../index");

const Shop = db.define("shop", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  imageLogo: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "/images/mentor-shop/defaultShopLogo.png"
  },
  owner: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: mentors_mentees,
      key: "mentorId"
    }
  }

});

module.exports = Shop;

// Get mentorId based on shopId for owner attribute


