const Sequelize = require("sequelize");
const db = require("../db");
const User = require("./User");
const Offering = require("./Offering");

const Shop = db.define("shop", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    shopLogo: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "/images/mentor_shop/defaultShopLogo.png"
    },
    // offerings:{
    //     type: Sequelize.ARRAY(Sequelize.STRING),
    //     allowNull: false,
    //     references: {
    //         model: Offering,
    //         key: 'id'
    //     }
    // }

});

module.exports = Shop;

// Get mentorId based on shopId for owner attribute
