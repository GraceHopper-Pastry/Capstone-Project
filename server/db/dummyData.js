const users = [
  {
    firstName: 'Steve',
    lastName: 'Jobs',
    password: 'steve_pw',
    email: 'steve@apple.com',
    isMentor: true,
    profilePic:
      'https://stackingthebricks.com/assets/images/steve-jobs-headshot.png',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    employer: 'Apple Computers',
    jobTitle: 'Founder and CEO',
    location: 'Cupertino, California',
    industry: 'Computer Technology',
    yearsInTech: 10,
    school: 'Reed College',
    areaOfStudy: 'Computer Science',
    endYear: 1972,
    intakeScore: 1,
  },
  {
    firstName: 'Grace',
    lastName: 'Hopper',
    password: 'grace_pw',
    email: 'grace@fsa.com',
    isMentor: true,
    profilePic:
      'https://www.onthisday.com/images/people/grace-hopper-medium.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    employer: 'US Navy',
    jobTitle: 'Rear Admiral',
    location: 'Arlington, Virginia',
    industry: 'Computer Technology',
    yearsInTech: 14,
    school: 'Smith College',
    areaOfStudy: 'Mathematics',
    endYear: 1944,
    intakeScore: 2,
  },
];

const shops = [
  {
    chat: true,
    advice: true,
    liveQandA: true,
  },
  {
    chat: true,
    advice: true,
    liveQandA: false,
  },
  {
    chat: false,
    advice: false,
    liveQandA: true,
  },
  {
    chat: true,
    advice: false,
    liveQandA: true,
  },
  {
    chat: true,
    advice: true,
    liveQandA: true,
  },
  {
    chat: true,
    advice: true,
    liveQandA: false,
  },
  {
    chat: true,
    advice: true,
    liveQandA: true,
  },
  {
    chat: true,
    advice: false,
    liveQandA: false,
  },
];

module.exports = {
  users,
  shops,
};
