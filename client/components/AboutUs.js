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
              src="https://wikiedu.org/wp-content/uploads/2018/10/ada_lovelace_2018_Featured_image.jpg"
            ></img>
            <h2>Carly Sandler</h2>
          </div>
          <div className="dev-card">
            <img
              className="dev-profile"
              src="https://wikiedu.org/wp-content/uploads/2018/10/ada_lovelace_2018_Featured_image.jpg"
            ></img>
            <h2>China Hoffman</h2>
          </div>
          <div className="dev-card">
            <img
              className="dev-profile"
              src="https://wikiedu.org/wp-content/uploads/2018/10/ada_lovelace_2018_Featured_image.jpg"
            ></img>
            <h2>Kejda Celaj</h2>
          </div>
          <div className="dev-card">
            <img
              className="dev-profile"
              src="https://wikiedu.org/wp-content/uploads/2018/10/ada_lovelace_2018_Featured_image.jpg"
            ></img>
            <h2>Jill Sherman</h2>
          </div>
        </div>
        <div className="about-text">
          <h3>About Stack Support</h3>
          <p>
            Stack Support was concieved as a way to establish meaningful
            connections between junior software engineers and experienced
            developers. Users can create an secure account with the option to
            authenticate with Google, LinkedIn, or Twitter; match with potential
            mentors based on a filtering system; and chat with those mentors.
          </p>

          <p>
            Stack Support was built on Node.js, React, Postgres, Express,
            Socket.io, Passport.io, MaterialUI, and Formik. Many of these
            technologies were new to the team and required a fair amount of
            research, patience, and experimentation. We failed a lot during the
            process, but picked ourselves up each time. While we struggled with
            misleading and sometimes outdated documentation and tutorials, in
            the end we made a project that we can all be proud of.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
