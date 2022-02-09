"use strict";

const {
    db,
    models: { User, Offering, Shop, Review }
} = require("../server/db");
const {
    dataUsers,
    dataOfferings,
    shopReviews,
    mentorShops,
    generateRandomShopOfferings
} = require("../server/db/dummyData");

const seed = async () => {
    try {
        await db.sync({ force: true });

        // USERS
        const users = await User.bulkCreate(dataUsers);

        console.log(`seeded ${users.length} users`);

        // OFFERINGS
        const offerings = await Offering.bulkCreate(dataOfferings);

        console.log(`seeded ${offerings.length} offerings`);

        // REVIEWS
        const reviews = await Review.bulkCreate(shopReviews);
        console.log(`seeded ${reviews.length} reviews`);

        // SHOPS
        const shops = await Shop.bulkCreate(mentorShops);
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

        // MENTOR SHOPS && ADD OFFERINGS

        for (let i = 0; i < shops.length; i++) {
            let offeringsArr = [];
            let shop = shops[i];
            let num = Math.floor(Math.random() * (offerings.length + 1));
            let oIdx = Math.floor(Math.random() * offerings.length);

            while (num <= offerings.length) {
                let shopOffering = offerings[oIdx];
                offeringsArr.push(shopOffering);
                num += 1;
            }
            await shop.addOfferings(offeringsArr);
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
