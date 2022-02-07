"use strict";

const {
    db,
    models: { User, Offering, Shop, Review }
} = require("../server/db");
const {
    users,
    offerings,
    generateRandomUserOfferings,
    menteeReviews,
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
        console.log(`seeded ${users.length} users`);

        // OFFERINGS
        await Promise.all(
            offerings.map(offering => {
                return Offering.create(offering);
            })
        );
        console.log(`seeded ${offerings.length} offerings`);

        // REVIEWS
        const reviews = await Promise.all(
            menteeReviews.map(review => {
                return Review.create(review);
            })
        );

        // SHOPS
        const shops = await Shop.bulkCreate(mentorShops);

        /**
         * Association Handling
         */

        // USERS and shops
        for (let i = 0; i < shops.length; i++) {
            shops[i].createUser(users[i].id);
        }
        console.log(`seeded ${shops.length} shops`);

        // // USERS (MENTORS) and OFFERINGS
        // let dataOfferings = [];
        // for (let i = 0; i < users.length; i++) {
        //     const user = users[i];
        //     if (user.isMentor) {
        //         let userOfferings = generateRandomUserOfferings();
        //         user.addOfferings(userOfferings);

        //     } else {
        //         //         // mentees receive an offerings array that is empty as a holding shell
        //         //         // when they book a service with their mentor, we will push the offerings object into this array
        //         await user.addOffering({ name: null, description: null });
        //     }
        //     dataOfferings.push(userOfferings);
        // }
        // console.log(`seeded ${dataOfferings.length} unique offerings`);

        // USERS (MENTEES) and REVIEWS - TEMP

        for (let i = 0; i < reviews.length; i++) {
            const mentees = users.filter(user => !user.isMentor);
            reviews[i].addUser(mentees[i]);
        }
        console.log(`seeded ${reviews.length} mentee reviews`);

        // MENTOR SHOPS (Users) and REVIEWS - TEMP
        for (let i = 0; i < reviews.length; i++) {
            const mentors = users.filter(user => !!user.isMentor);
            reviews[i].addUser(mentors[i]);
        }

        console.log(`seeded ${reviews.length} mentee reviews on shops`);
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
