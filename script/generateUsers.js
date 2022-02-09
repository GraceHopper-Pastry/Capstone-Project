const faker = require("@faker-js/faker").faker;
const loremIpsum = require("lorem-ipsum").loremIpsum;

const {
  dataUsers,
  dataOfferings,
  shopReviews,
  mentorShops,
  generateRandomShopOfferings
} = require("../server/db/dummyData");

function generateUsers() {
  let fakeUsers = [];
  for (let i = 0; i <=20; i++){
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = `${firstName.toLowerCase()}@email.com`;
    let password = `${firstName.toLowerCase()}_pw`;
    let isMentor = false;
    let profilePic = faker.image.avatar();
    let bio = faker.lorem.sentence();
    let employer = faker.company.companyName();
    let jobTitle = faker.name.jobTitle();
    let location = `${faker.address.cityName()}, ${faker.address.state()}`;
    let industry = `${faker.name.jobArea()} Technology`;
    let yearsInTech = faker.datatype.number({min: 5, max: 30});
    let school = `${faker.random.word()} University`;
    let areaOfStudy = "Computer Science";
    let endYear = faker.datatype.number({min: 1970, max: 2017});;
    let intakeScore = faker.datatype.number({min: 0, max: 4});

    fakeUsers.push({
      firstName,
      lastName,
      email,
      password,
      isMentor,
      profilePic,
      bio,
      employer,
      jobTitle,
      location,
      industry,
      yearsInTech,
      school,
      areaOfStudy,
      endYear,
      intakeScore
    })


  }
  return fakeUsers;

}

module.exports = { generateUsers };
