import React from "react";

const AboutUs = () => {
  return (
    <div>
      <h1>MEET THE DEVELOPERS</h1>
      <div>
        <div id="flex-container">
          <div className="dev-card">
            <img
              className="dev-profile"
              src="images/developers/carlyIcon.jpeg"
            ></img>
            <h2>Carly Sandler</h2>
          </div>
          <div className="dev-card">
            <img
              className="dev-profile"
              src="images/developers/china_hoffman_profile.jpeg"
            ></img>
            <h2>China Hoffman</h2>
          </div>
          <div className="dev-card">
            <img
              className="dev-profile"
              src="images/developers/kejda_celaj.jpg"
            ></img>
            <h2>Kejda Celaj</h2>
          </div>
          <div className="dev-card">
            <img
              className="dev-profile"
              src="images/developers/jill_sherman.jpg"
            ></img>
            <h2>Jill Sherman</h2>
          </div>
        </div>
        <div className="about-text">
          <h3>About Stack Support</h3>
          <p>
            Stack Support was conceived as a way to establish meaningful
            connections between junior software engineers and experienced
            developers. Users can create a secure account with the option to
            authenticate with Google, LinkedIn, or Twitter; match with potential
            mentors based on a coding personality quiz; and chat with those
            mentors.
          </p>

          <p>
            Stack Support was built on Node.js, React, Postgres, Express,
            Socket.io, Passport.io, MaterialUI, and Formik. Many of these
            technologies were new to the team and required research, patience,
            and experimentation. We challenged ourselves to use newer releases
            of many technologies, which meant upgrading our boilerplate, and
            working with limited tutorials or additional resources. We dealt
            with persistent bugs, incompatible libraries, and tight deadlines.
            In the end we made a project that we can all be proud of.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
