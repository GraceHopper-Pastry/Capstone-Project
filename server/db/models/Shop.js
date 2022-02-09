const Sequelize = require("sequelize");
const db = require("../db");
const User = require("./User");
const Offering = require("./Offering");

const Shop = db.define("shop", {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
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
    //     },
    //     defaultValue: [],
    // },
    // mentees: {
    //     type: Sequelize.ARRAY(Sequelize.STRING),
    //     allowNull: true,
    //     references: {
    //         model: User,
    //         key: 'id',
    //         where: {
    //             isMentor: false
    //         }
    //     }
    // }

});

module.exports = Shop;

// Get mentorId based on shopId for owner attribute
