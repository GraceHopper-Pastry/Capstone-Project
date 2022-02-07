const Sequelize = require("sequelize");
const db = require("../db");
const User = require("./User");

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
    }
    // ownerId: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   unique: true,
    //   references: {
    //     model: User,
    //     key: id,
    //     where: {
    //       id: shop.id,
    //       isMentor: true,
    //     }
    //   }
    // },
});

module.exports = Shop;

// Get mentorId based on shopId for owner attribute
