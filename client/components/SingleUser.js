import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSingleUser } from "../store/singleUser";
import ImageUpload from "./ImageUpload";
import QuizPopup from "./QuizPopup";
import { Button } from "@mui/material";

class SingleUser extends React.Component {
  componentDidMount() {
    this.props.fetchSingleUser();
  }

  render() {
    const user = this.props.user || {};
    return (
      <div>
        <QuizPopup isOpen={user.intakeScore === null} />

        {/* <div className="profile-container"> */}
        <div>
          <h2 className="profile-title">My Profile</h2>
          <div className="main-data-profile">
            <div>
              <img src={user.profilePic} />

              <h3>
                {user.firstName} {user.lastName}
              </h3>

              <h2 className="job-title">{user.jobTitle.toUpperCase()}</h2>
            </div>
            {/* <div className="user-profile-data">
              </div> */}

            {/* MENTOR/MENTEE BLOCK */}
            <div>
              {/* IF USER IS A MENTOR */}
              {user.isMentor ? (
                <div className="mentor-block">
                  <p className="profile-mentees">My Mentees:</p>
                  <div>
                    {user.Mentees.length ? (
                      <div className="mentor-profile-list">
                        <ul>
                          {user.Mentees.map((person) => (
                            <li key={person.id}>
                              <Link
                                to={{
                                  pathname: `/users/mentor/${person.id}`,
                                }}
                              >
                                <p className="mentor-name">
                                  {person.firstName + " " + person.lastName}
                                </p>
                              </Link>
                              <p className="mentor-job">
                                {person.jobTitle + " at " + person.employer}
                              </p>
                              <img
                                className="mentor-image"
                                src={person.profilePic}
                              />
                              <br />
                              <Button
                                component={Link}
                                to={"/users/chat"}
                                variant="contained"
                              >
                                {user.isMentor ? "Chat!" : "Chat!"}
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div>
                        {/* IF MENTOR HAS NOT YET BEEN ASSIGNED MENTEES */}
                        <h1>Check back soon to meet your new mentees!</h1>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="mentor-block">
                  {/* IF USER IS A MENTEE */}
                  {/* <p className="profile-mentees">My Mentor:</p> */}
                  <div className="mentor-profile-list">
                    {/* IF USER HAS BEEN ASSIGNED A MENTOR */}
                    {user.Mentors.length ? (
                      <div className="mentor-profile-list">
                        <ul>
                          {user.Mentors.map((person) => (
                            <li key={person.id}>
                              <Link
                                to={{
                                  pathname: `/users/mentor/${person.id}`,
                                }}
                              >
                                <p className="mentor-name">
                                  {person.firstName + " " + person.lastName}
                                </p>
                              </Link>
                              <p className="mentor-job">
                                {person.jobTitle + " at " + person.employer}
                              </p>
                              <img
                                className="mentor-image"
                                src={person.profilePic}
                              />
                              <br />
                              <Button
                                component={Link}
                                to={"/users/chat"}
                                variant="contained"
                              >
                                {user.isMentor ? "Chat!" : "Chat!"}
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div>
                        {/* IF USER HAS NOT YET BEEN ASSIGNED A MENTOR */}
                        <span className="no-mentor">
                          No mentors assigned yet. Click
                          <Link to={`/users/mentors/${user.intakeScore}`}>
                            {" here "}
                          </Link>
                          to connect.
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="single-user">
            <div className="profile-data-block">
              <p>
                <span style={{ fontWeight: "bold" }}>Bio </span>
                {user.bio}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Email </span>
                {user.email}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Location </span>
                {user.location}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Employer </span>
                {user.employer}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Years in Tech </span>
                {user.yearsInTech}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>School </span>
                {user.school}
              </p>
              <div className="my-profile-education">
                <p>
                  <span style={{ fontWeight: "bold" }}>Area of Study </span>
                  {user.areaOfStudy}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>End Year </span>
                  {user.endYear}
                </p>
              </div>
              <div className="my-profile-employment"></div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

const mapState = (state) => {
  return { user: state.singleUserReducer };
};

const mapDispatch = (dispatch) => ({
  fetchSingleUser: () => dispatch(fetchSingleUser()),
});

export default connect(mapState, mapDispatch)(SingleUser);
