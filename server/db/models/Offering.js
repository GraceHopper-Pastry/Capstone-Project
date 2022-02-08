const Sequelize = require("sequelize");
const db = require("../db");
const Shop = require("./Shop");

const Offering = db.define("offering", {
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    owner: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        },
        references: {
            model: Shop,
            key: "ownerId"
        }
    },
    shop: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        validate: {},
        references: {
            model: Shop,
            key: "id"
        }
    }
});

module.exports = Offering;

/* INSTANCE METHODS */
// const isOwnerOrCustomer = () => {

// };
