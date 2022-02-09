//this is the access point for all things database related!

const db = require("./db");
const Sequelize = require("sequelize");

const User = require("./models/User");
const Offering = require("./models/Offering");
const Shop = require("./models/Shop");
const Booking = require("./models/Booking");
const Review = require("./models/Review");

const mentors_mentees = db.define("mentors_mentees", {
    mentorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: "id"
        }
    },
    menteeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: "id"
        }
    }
});

;

//associations could go here!
User.belongsToMany(User, {
    as: "Mentees",
    foreignKey: "mentorId",
    through: "mentors_mentees"
});

User.belongsToMany(User, {
    as: "Mentors",
    foreignKey: "menteeId",
    through: "mentors_mentees"
});


User.belongsToMany(Offering, {
    through: Booking,
    as: "mentee",
    foreignKey: "offeringId",
    scope: {
        isMentor: false

    }
});

User.belongsToMany(Offering, {
    through: Booking,
    as: "mentor",
    foreignKey: "offeringId",
    scope: {
        isMentor: true

    }
})

Offering.belongsToMany(User, {
    through: Booking,
});



User.hasOne(Shop, {
    scope: {
        isMentor: true
    }
})

Shop.belongsTo(User);

Shop.hasMany(Offering, {as: 'offerings'});
Offering.belongsTo(Shop, {as: 'offerings'});



User.belongsToMany(Review, {
    through: "users_reviews"
});
Review.belongsToMany(User, {
    through: "users_reviews"
});

Review.belongsTo(Shop)
Shop.hasMany(Review)



module.exports = {
    db,
    models: {
        User,
        Offering,
        mentors_mentees,
        // users_offerings,
        Shop,
        Review,
        Booking
    }
};
