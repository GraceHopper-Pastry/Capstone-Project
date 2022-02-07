const Sequelize = require("sequelize");
const moment = require("moment");
const db = require("../db");
const { User, Offerings, Shop, mentors_mentees } = require("../index");

// Join Table -> Will persist user's "mentor offerings" once clicked book && association between mentor, mentee and offerings
const Booking = db.define("booking", {
    startTime: {
        type: Sequelize.DATE(6),
        allowNull: true,
        defaultValue: null,
        get() {
            return moment(this.getDataValue(startTime)).format(
                "DD/MM/YYYY h:mm:ss"
            );
        }
    },
    endTime: {
        type: Sequelize.DATE(6),
        allowNull: true,
        defaultValue: null,
        get() {
            return moment(this.getDataValue(endTime)).format(
                "DD/MM/YYYY h:mm:ss"
            );
        }
    },
    appointmentDate: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: null,
        get() {
            return moment(this.getDataValue(appointmentDate)).format(
                "DD/MM/YYYY"
            );
        }
    },
//     menteeId: {
//         type: Sequelize.INTEGER,
//         references: {
//             model: mentors_mentees,
//             key: "menteeId"
//         }
//     },

//     menteeEmail: {
//         type: Sequelize.STRING,
//         allowNull: true,
//         references: {
//             model: User,
//             key: "email",
//             where: {
//                 isMentor: false
//             }
//         }
//     },

//     mentorId: {
//         type: Sequelize.INTEGER,
//         allowNull: true,
//         references: {
//             model: mentors_mentees,
//             key: "mentorId"
//         }
//     },

//     mentorEmail: {
//         type: Sequelize.STRING,
//         allowNull: true,
//         references: {
//             model: User,
//             key: "email",
//             where: {
//                 isMentor: true
//             }
//         }
//     },

//     offeringsId: {
//         type: Sequelize.INTEGER,
//         references: {
//             model: Offerings,
//             key: "id"
//         }
//     }
// });

// module.exports = Booking;
