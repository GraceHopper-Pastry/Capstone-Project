const Sequelize = require("sequelize");
const moment = require("moment");
const { db, models: { User, Offerings, Shop } } = require("../db");
const mentors_mentees = require("../index");

// Join Table -> Will persist user's "local cart once clicked book && association between mentor, mentee and offerings
const Booking = db.define("booking", {
    startTime: {
        type: Sequelize.DATE(6),
        allowNull: false,
        defaultValue: "00:00:00",
        get() {
            return moment(this.getDataValue(startTime)).format(
                "DD/MM/YYYY h:mm:ss"
            );
        }
    },
    endTime: {
        type: Sequelize.DATE(6),
        allowNull: false,
        defaultValue: "00:00:00",
        get() {
            return moment(this.getDataValue(endTime)).format(
                "DD/MM/YYYY h:mm:ss"
            );
        }
    },
    appointmentDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: "today",
        get() {
            return moment(this.getDataValue(appointmentDate)).format(
                "DD/MM/YYYY"
            );
        }
    },
    menteeId: {
        type: Sequelize.INTEGER,
        references: {
            model: mentors_mentees,
            key: "menteeId"
        }
    },

    menteeEmail: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: User,
            key: "email",
            where: {
                menteeId: id,
                isMentor: false
            }
        }
    },

    mentorId: {
        type: Sequelize.INTEGER,
        references: {
            model: mentors_mentees,
            key: "mentorId"
        }
    },

    mentorEmail: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: User,
            key: "email",
            where: {
                id: mentorId,
                isMentor: true
            }
        }
    },

    offeringsId: {
        type: Sequelize.INTEGER,
        references: {
            model: Offerings,
            key: "id"
        }
    }
});

module.exports = Booking;
