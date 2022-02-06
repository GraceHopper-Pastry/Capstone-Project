const Sequelize = require("sequelize");
const db = require("../db");
const Review = db.define("review", {
  reviewMessage: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      len: {
        args: 100,
        msg: "If you'd like to leave a review, we'd prefer it be at least 100 characters long"
      }
    }
  }
});
module.exports = Review;

