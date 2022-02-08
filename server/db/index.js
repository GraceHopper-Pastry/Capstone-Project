//this is the access point for all things database related!

const db = require("./db");
const Sequelize = require("sequelize");

const User = require("./models/User");
const Offering = require("./models/Offering");
const Shop = require("./models/Shop");
// const Booking = require("./models/Booking");
const Review = require("./models/Review");
const users_offerings = require("./models/UserOfferings");

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

// Confused about this association - changed temporarily
// User.belongsToMany(Offerings, {
//   through: 'Shop',

// })

User.belongsToMany(Offering, {
    as: "offerings",
    foreignKey: "offeringsId",
    through: "Shop"
});

Offering.belongsToMany(User, {
    as: "offerings",
    foreignKey: "offeringsId",
    through: "Shop"
});

// Offerings.belongsToMany(Users, {
//   as: "services"
// })

User.hasOne(Shop, {
    as: "owner",
    foreignKey: "ownerId",
});
Shop.belongsTo(User)

Shop.belongsToMany(Offering, {
    as: "shop",
    foreignKey: "offerings",
    through: "shop_offerings"
});

Offering.belongsToMany(Shop, {
    as: "offerings",
    foreignKey: "shop",
    through: "shop_offerings"
})


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
        UserOfferings,
        Shop,
        Review
    }
};
