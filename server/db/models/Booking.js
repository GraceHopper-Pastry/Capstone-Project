
const Sequelize = require("sequelize");
const db = require("../db");
const mentors_mentees = require("../index");

const Booking = db.define("booking", {
  startTime: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  endTime: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  appointmentDate: {

    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: Date.now
  },
  customerId: {
    type: Sequelize.INTEGER,
    references: {
      model: mentors_mentees,
      key: 'menteeId',
    },
  },

  providerId: {
    type: Sequelize.INTEGER,
    references: {
      model: mentors_mentees,
      key: 'mentorId'
    }
  }
});

module.exports = Booking;


