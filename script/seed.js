"use strict";

const {
    db,
    models: { User, Offering, Shop, Review }
} = require("../server/db");
const {
    dataUsers,
    dataOfferings,
    mentorShops
} = require("../server/db/dummyData");
const {
    generateShops,
    generateShopReviews,
    generateOfferings
} = require("./generateShopAssociations");

const seed = async () => {
    try {
        await db.sync({ force: true });

        // USERS
        const users = await User.bulkCreate(dataUsers);
        console.log(users[0].__proto__);

        console.log(`seeded ${users.length} users`);

        // OFFERINGS
        const offerings = await Offering.bulkCreate(dataOfferings);
        console.log(offerings[0].__proto__);

        console.log(`seeded ${offerings.length} offerings`);

        // REVIEWS
        const dataReviews = generateShopReviews();
        const reviews = await Review.bulkCreate(dataReviews);
        console.log(reviews[0].__proto__);
        console.log(`seeded ${reviews.length} reviews`);

        // SHOPS

        const shops = await Shop.bulkCreate(mentorShops);
        console.log(shops[0].__proto__);
        console.log(`seeded ${shops.length} shops`);

        /**
         * Association Handling
         */

        // // // MENTOR SHOPS  and REVIEWS - TEMP
        for (let i = 0; i < shops.length; i++) {
            await shops[i].addReview(reviews[i]);
            await shops[i].addReview(reviews[i + 1]);
            await shops[i].addReview(reviews[i + 2]);
        }

        console.log(`seeded reviews for ${shops.length} reviews on shops`);

        // // MENTOR SHOPS && ADD OFFERINGS
        let mentors = users.filter(user => user.isMentor);
        for (let i = 0; i < mentors.length; i++) {
            let shopOfferings = new Set();
            let num = Math.floor(Math.random() * (offerings.length + 1));
            let oIndex = Math.floor(Math.random() * offerings.length);
            while (num < shopOfferings.length) {
                let offering = offerings[oIndex];
                shopOfferings.add(offering);
            }
            await mentors[i].setOfferings(shopOfferings);
        }

        for (let i = 0; i < shops.length; i++) {
            let mentors = users.filter(user => user.isMentor);
            await shops[i].addOwner(mentors[i]);
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (module === require.main) {
    seed()
        .then(() => {
            console.log("Seeding success!");
            db.close();
        })
        .catch(err => {
            console.error("Oh noes! Something went wrong!");
            console.error(err);
            db.close();
        });
}
