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
    }
});

module.exports = Offering;

/* INSTANCE METHODS */
// const isOwnerOrCustomer = () => {

// };
