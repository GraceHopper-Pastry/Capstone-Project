//this is the access point for all things database related!

const db = require("./db");
const Sequelize = require("sequelize");

const User = require("./models/User");
const Offering = require("./models/Offering");
const Shop = require("./models/Shop");
// const Booking = require("./models/Booking");
const Review = require("./models/Review");

const mentors_mentees = db.define("mentors_mentees", {
    mentorId: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: "id"
        }
    },
    menteeId: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: "id"
        }
    }
});

const users_offerings = db.define("users_offerings", {
    userId: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: "id"
        }
    },

    offeringsId: {
        type: Sequelize.INTEGER,
        references: {
            model: Offering,
            key: "id"
        }
    }

    // this join table will allow us to create associations between all users and offerings,
    // and also filter for those offerings provided by mentors vs booked by customer with ISMENTOR ?
});

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

// Confused about this association - changed temporarily
// User.belongsToMany(Offerings, {
//   through: 'Shop',

// })

User.belongsToMany(Offering, {
    foreignKey: "offeringsId",
    through: "users_offerings"
});

Offering.belongsToMany(User, {
    foreignKey: "userId",
    through: "users_offerings"
});

// Offerings.belongsToMany(Users, {
//   as: "services"
// })

User.hasOne(Shop, {
    foreignKey: "ownerId"
});
Shop.belongsTo(User)

User.belongsToMany(Review, {
    through: "users_reviews"
});
Review.belongsToMany(User, {
    through: "users_reviews"
});

// User.belongsToMany(Booking, {
//   through: 'Booking'
// })

module.exports = {
    db,
    models: {
        User,
        Offering,
        mentors_mentees,
        Shop,
        Review
    }
};
