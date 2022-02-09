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

const user = {

}

const magic = async () => {
  try {
    const users = await User.bulkCreate(dataUsers);
    console.log(`USER METHODS: ${users[0].__proto__}`);

    const offerings = await Offering.bulkCreate(dataOfferings);
    console.log(`OFFERINGS METHODS: ${offerings[0].__proto__}`);

    const shops = await Shop.bulkCreate(mentorShops);
    console.log(`SHOP METHODS: ${shops[0].__proto__}`);

    const reviews = await Review.bulkCreate(shopReviews)
    console.log(`REVIEWS METHODS: ${reviews[0].__proto__}`)
  }
  catch (err) {
    console.log(err);
  }
}
if (module === require.main) {
  magic()
}

