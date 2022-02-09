const faker = require("@faker-js/faker").faker;
const loremIpsum = require("lorem-ipsum").loremIpsum;

const [logo1, logo2, logo3, logo4] = [
    "/images/mentor_shop/shopLogoBlue.png",
    "/images/mentor_shop/shopLogoBW.png",
    "/images/mentor_shop/shopLogoDark.png",
    "/images/mentor_shop/shopLogoWhite.png"
];
const shopLogos = [logo1, logo2, logo3, logo4];
const generateRandomLogo = () => {
    return shopLogos[Math.floor(Math.random() * shopLogos.length)];
};
const { generateUsers  } = require("./generateUsers");
const { dataOfferings, dataUsers } = require("../server/db/dummyData");

const fakeUsers = generateUsers();

// generate random offerings ARRAY
function generateOfferings() {
  let shopOfferings = new Set();
  let num = Math.floor(Math.random() * (dataOfferings.length + 1));
  let oIndex = Math.floor(Math.random() * dataOfferings.length);
  while (num < shopOfferings.length) {
    let offering = dataOfferings[oIndex];
    shopOfferings.add(offering);
  }
  return shopOfferings;

}

function generateShopReviews() {

  let shopReviews = [];
  for (let i = 0; i < 100; i++){
    const review = {
      reviewMessage: faker.lorem.sentence(20)
    };
    shopReviews.push(review);

  }
  return shopReviews;

}



function generateShops() {
  const fakeUsers = generateUsers();
  let fakeshops = [];
  for (let i = 0; i < dataUsers.length; i++) {
    if (dataUsers[i].isMentor) {
      let shop = {
        name: `${dataUsers[i].firstName} ${dataUsers[i].lastName}'s Shop`,
        description: loremIpsum({ count: 1, units: "sentences", wordsPerUnit: 20}),
        shopLogo: generateRandomLogo(),
        // ownerId: dataUsers[i].id,

      };

      fakeShops.push(shop);

    }
  }
  return fakeShops;
};

module.exports = {
  generateShops,
  generateShopReviews,
  generateOfferings
}
