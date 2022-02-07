"use strict";

const {
    db,
    models: { User, Offerings, Shop, Review }
} = require("../server/db");
const {
    users,
    offerings,
    menteeReviews,
    generateRandomUserOfferings,
    mentorShops
} = require("../server/db/dummyData");

const seed = async () => {
    try {
        await db.sync({ force: true });

        // USERS
        await Promise.all(
            users.map(user => {
                return User.create(user);
            })
        );

        // OFFERINGS
        await Promise.all(
            offerings.map(offering => {
                return Offerings.create(offering);
            })
        );

        // REVIEWS
        const reviews = await Promise.all(
            menteeReviews.map(review => {
                return Review.create(review);
            })
        );

        // SHOPS
        await Promise.all(
            mentorShops.map(shop => {
                return Shop.create(shop);
            })
        );

        /**
         * Association Handling
         */

        // SHOPS and USERS (MENTORS)

        // USERS (MENTORS) and OFFERINGS
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (user.isMentor) {
                await user.addOfferings(generateRandomUserOfferings());
            } else {
                // mentees receive an offerings array that is empty as a holding shell
                // when they book a service with their mentor, we will push the offerings object into this array
                await user.addOfferings([]);
            }
        }

        // USERS (MENTEES) and REVIEWS - TEMP

        for (let i = 0; i < reviews.length; i++) {
            const mentees = users.filter(user => !user.isMentor);
            reviews[i].addUser(mentees[i]);
        }

        // MENTOR SHOPS (Users) and REVIEWS - TEMP
        for (let i = 0; i < reviews.length; i++) {
            const mentors = users.filter(user => !!user.isMentor);
            if (mentors[i].shopId) {
                mentors[i].addReview(review[i]);
            }
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
