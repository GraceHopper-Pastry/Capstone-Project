# Stack Support: 2111-GHP-Capstone-Project

## Directory Structure

```
  Capstone-Project
  ├─ .babelrc
  ├─ CHANGELOG.md
  ├─ LICENSE
  ├─ README.md
  ├─ client
  │  ├─ App.js
  │  ├─ Cookies.js
  │  ├─ Routes.js
  │  ├─ components
  │  │  ├─ AccountSettings.js
  │  │  ├─ AuthForm.js
  │  │  ├─ Chat
  │  │  │  ├─ MainChat.js
  │  │  │  ├─ MessageList.js
  │  │  │  ├─ NewMessageEntry.js
  │  │  │  └─ Sidebar.js
  │  │  ├─ EditUser.js
  │  │  ├─ Home.js
  │  │  ├─ Home.spec.js
  │  │  ├─ ImageUpload.js
  │  │  ├─ IntakeForm.js
  │  │  ├─ LoggedInNavBar.js
  │  │  ├─ LoggedOutNavBar.js
  │  │  ├─ Match.js
  │  │  ├─ Matches.js
  │  │  ├─ Navigation.js
  │  │  ├─ QuizPopup.js
  │  │  ├─ SingleUser.js
  │  │  ├─ StaticQuizPage.js
  │  │  └─ UserForm.js
  │  ├─ history.js
  │  ├─ index.js
  │  ├─ logged_in
  │  │  ├─ components
  │  │  │  └─ userProfile
  │  │  └─ dummy_data
  │  │     └─ mentors.js
  │  ├─ logged_out
  │  │  └─ components
  │  │     ├─ MainLanding.js
  │  │     ├─ footer
  │  │     │  └─ Footer.js
  │  │     ├─ landing_page
  │  │     │  ├─ HeaderSection.js
  │  │     │  ├─ OfferCard.js
  │  │     │  └─ OfferSection.js
  │  │     └─ navigation
  │  │        └─ OldNavBar.js
  │  ├─ shared
  │  │  └─ components
  │  │     ├─ AccessibilitySwitch.js
  │  │     ├─ Breadcrumb.js
  │  │     ├─ CircularProgress.js
  │  │     ├─ ComplexCard.js
  │  │     ├─ CustomSlider.js
  │  │     ├─ DelayingApearance.js
  │  │     ├─ HelpIcon.js
  │  │     ├─ HoverPopover.js
  │  │     ├─ ImgMediaCard.js
  │  │     ├─ Picker.js
  │  │     ├─ SimpleGrow.js
  │  │     ├─ SimplePortal.js
  │  │     ├─ TabPanel.js
  │  │     ├─ TemporaryDrawer.js
  │  │     ├─ VerticalLinearSteper.js
  │  │     ├─ Video.js
  │  │     └─ WaveBorder.js
  │  ├─ socket.js
  │  ├─ store
  │  │  ├─ allMessages.js
  │  │  ├─ auth.js
  │  │  ├─ auth.spec.js
  │  │  ├─ index.js
  │  │  ├─ matches.js
  │  │  └─ singleUser.js
  │  └─ theme.js
  ├─ package.json
  ├─ public
  │  ├─ bundle.js
  │  ├─ bundle.js.LICENSE.txt
  │  ├─ bundle.js.map
  │  ├─ favicon.ico
  │  ├─ images
  │  │  ├─ brand_logo
  │  │  │  ├─ med_assets
  │  │  │  ├─ misc
  │  │  │  └─ social_kit
  │  │  ├─ logged_in
  │  │  └─ logged_out
  │  ├─ index.html
  │  ├─ style.css
  │  └─ svg_assets
  │     ├─ branding
  │     └─ misc
  ├─ script
  │  └─ seed.js
  └─ server
    ├─ api
    │  ├─ authmiddleware.js
    │  ├─ chat.js
    │  ├─ index.js
    │  ├─ users.js
    │  └─ users.spec.js
    ├─ app.js
    ├─ auth
    │  ├─ AuthService.js
    │  ├─ github.js
    │  ├─ google.js
    │  ├─ index.js
    │  ├─ linkedIn.js
    │  └─ twitter.js
    ├─ db
    │  ├─ db.js
    │  ├─ dummyData.js
    │  ├─ index.js
    │  └─ models
    │     ├─ Message.js
    │     ├─ Offerings.js
    │     ├─ Sessions.js
    │     ├─ User.js
    │     └─ User.spec.js
    ├─ index.js
    └─ socket
        └─ index.js

```
## Setup

To use this as boilerplate, you'll need to take the following steps:

* Don't fork or clone this repo! Instead, create a new, empty
  directory on your machine and `git init` (or create an empty repo on
  Github and clone it to your local machine)

* Now you will have to add the fs-app-template as a remote and merge it into your own repository.

```
git remote add boilermaker git@github.com:FullstackAcademy/fs-app-template.git
git fetch boilermaker
git merge boilermaker/main
git branch -m master main
```

## Customize

Now that you've got the code, follow these steps to get acclimated:

* Update project name and description in `package.json`
* `npm install`
* Create two postgres databases (`MY_APP_NAME` should match the `name`
  parameter in `package.json`):
* These commands will create both your **development** and **test** databases

```
createdb <YOUR APP NAME HERE FROM package.json>
createdb <YOUR APP NAME HERE FROM package.json>-test
```

* By default, running `npm test` will use your test database, while
  regular development uses development database

## Start

Sync and seed your database by running `npm run seed`. Running `npm run start:dev` will make great things happen!

- start:dev will both start your server and build your client side files using webpack
- start:dev:logger is the same as start:dev, but you will see your SQL queries (can be helpful for debugging)
- start:dev:seed will start your server and also seed your database (this is useful when you are making schema changes and you don't want to run your seed script separately)


### Heroku

1.  Set up the [Heroku command line tools][heroku-cli]
2.  `heroku login`
3.  Add a git remote for heroku:

[heroku-cli]: https://devcenter.heroku.com/articles/heroku-cli

* **If you are creating a new app...**

  1.  `heroku create` or `heroku create your-app-name` if you have a
      name in mind.
  2.  `heroku config:set JWT=<your secret here!>` to set a secret for JWT signing

Database Setup

  3.  `heroku addons:create heroku-postgresql:hobby-dev` to add
      ("provision") a postgres database to your heroku dyno (This creates your production database)

  4.  `heroku config:set SEED=true` to get heroku to sync and seed your database

  5.   note everytime your app restarts, the database tables will be dropped and re-created. To avoid this you can `config:unset SEED`


* **If you already have a Heroku app...**

  1.  `heroku git:remote your-app-name` You'll need to be a
      collaborator on the app.


Now, you should be deployed!

