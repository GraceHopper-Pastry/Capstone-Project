'use strict';

const {
  db,
  models: { User, Offerings },
} = require('../server/db');
const { users, offerings } = require('../server/db/dummyData');

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );
    await Promise.all(
      offerings.map((offering) => {
        return Offerings.create(offering);
      })
    );
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
      console.log('Seeding success!');
      db.close();
    })
    .catch((err) => {
      console.error('Oh noes! Something went wrong!');
      console.error(err);
      db.close();
    });
}
