const Sequelize = require("sequelize");
const db = require("../db");
const User = require("./User")
const Offering = require("./Offering")

const users_offerings = db.define("users_offerings", {
  userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
          model: User,
          key: "id"
      }
  },

  offeringsId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
          model: Offering,
          key: "id"
      }
  }

  // this join table will allow us to create associations between all users and offerings,
  // and also filter for those offerings provided by mentors vs booked by customer with ISMENTOR ?
})

module.exports = users_offerings;
