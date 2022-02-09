// const Sequelize = require("sequelize");
// const moment = require("moment");
// const db = require("../db");
// // const mentors_mentees = require("../index");
// const Offering = require("./Offering");

// // Join Table -> Will persist user's "mentor offerings" once clicked book && association between mentor, mentee and offerings
// const Booking = db.define("booking", {
//     startTime: {
//         type: Sequelize.DATE,
//         allowNull: true,
//         defaultValue: null,
//         get() {
//             return moment(this.getDataValue(startTime)).format(
//                 "DD/MM/YYYY h:mm:ss"
//             );
//         }
//     },
//     endTime: {
//         type: Sequelize.DATE,
//         allowNull: true,
//         defaultValue: null,
//         get() {
//             return moment(this.getDataValue(endTime)).format(
//                 "DD/MM/YYYY h:mm:ss"
//             );
//         }
//     },
//     appointmentDate: {
//         type: Sequelize.DATEONLY,
//         allowNull: true,
//         defaultValue: null,
//         get() {
//             return moment(this.getDataValue(appointmentDate)).format(
//                 "DD/MM/YYYY"
//             );
//         }
//     },
//     menteeId: {
//         type: Sequelize.INTEGER,
//         references: {
//             model: mentors_mentees,
//             key: "menteeId",

//         },
//     },

//     mentorId: {
//         type: Sequelize.INTEGER,

//         references: {
//             model: mentors_mentees,
//             key: "mentorId",
//         },
//     },
//     offeringsId: {
//         type: Sequelize.INTEGER,
//         references: {
//             model: Offering,
//             key: "id"
//         }
//     }
// });

// // module.exports = Booking;
