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
        <div>
          <h2 className="profile-title">My Profile</h2>
        </div>
        <div className="profile-container">
        <div>
          <div className="main-data-profile">
          {user.profilePic ===
          "https://zultimate.com/wp-content/uploads/2019/12/default-profile.png" ? (
            <div>
              <img className="profile-pic" src={user.profilePic} />
              {/* <p>Upload a profile pic!</p> */}
              <ImageUpload />
            </div>
          ) : (
            <img style={{ width: "200" }} src={user.profilePic} />
          )}
          <div className="user-profile-data">
            <div className="my-profile-name">
              <p>{user.firstName} {user.lastName}</p>
            </div>
            <p className="job-title">{user.jobTitle}</p>
            <p className="industry">{user.industry}</p>
          </div>
          </div>

          <div className="single-user">
            <div className="profile-data-block">
              <p>Bio: {user.bio}</p>
              <p>Email: {user.email}</p>
              <p>Location: {user.location}</p>
              <p>Years in Tech: {user.yearsInTech}</p>
              <p>School: {user.school}</p>
              <div className="my-profile-education">
                <p>Area of Study: {user.areaOfStudy}</p>
                <p>End Year: {user.endYear}</p>
              </div>
              <div className="my-profile-employment">
                <p>Employer: {user.employer}</p>
              </div>
            </div>
            {/* IF USER IS A MENTOR */}
            {user.isMentor ? (
              <div className="mentor-block">
                <p className="profile-mentees">Your Mentees:</p>
                <div>
                  {user.Mentees.length ? (
                    <div>
                      {/* IF MENTOR HAS BEEN ASSIGNED MENTEES */}
                      <ul>
                        {user.Mentees.map((person) => (
                          <li key={person.id}>
                            {person.firstName + " " + person.lastName}

                            <img
                              style={{ width: "200px" }}
                              src={person.profilePic}
                            />
                            <Button
                              className="button"
                              color="inherit"
                              size="medium"
                              onClick={() =>
                                this.props.history.push("/users/chat")
                              }
                            >
                              {user.isMentor
                                ? "Chat with your Mentees!"
                                : "Chat with your Mentor"}
                            </Button>
                            {/* <Button
                              className='button'
                              component={Link}
                              type='button'
                              to={'XXX'}
                            >
                              See Mentee Profile
                            </Button> */}
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
                <p className="profile-mentees">Your Mentor:</p>
                <div className="mentor-profile-list">
                  {/* IF USER HAS BEEN ASSIGNED A MENTOR */}
                  {user.Mentors.length ? (
                    <div className="mentor-profile-list">
                      {/* IF MENTOR HAS BEEN ASSIGNED MENTEES */}
                      <ul>
                        {user.Mentors.map((person) => (
                          <li key={person.id}>
                            <h3>{person.firstName + " " + person.lastName}</h3>
                            <p>{person.jobTitle + " at " + person.employer}</p>
                            <img className="mentor-image" src={person.profilePic} />
                              <br/>
                            <Button
                              className="button"
                              color="inherit"
                              size="medium"
                              onClick={() =>
                                this.props.history.push("/users/chat")
                              }
                            >
                              {user.isMentor
                                ? "Chat with your Mentees!"
                                : "Chat with your Mentor"}
                            </Button>
                            {/* <Button
                              className='button'
                              component={Link}
                              type='button'
                              to={'/mentor/:mentorid'}
                            >
                              See Mentor Profile
                            </Button> */}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div>
                      {/* IF USER HAS NOT YET BEEN ASSIGNED A MENTOR */}
                      <span className="no-mentor">No mentors assigned yet. Click <Link to={`/users/mentors/${user.intakeScore}`}>
                        here
                      </Link> to connect.</span>
                      
                    </div>
                  )}
                </div>
              </div>
            )}
            </div>
            </div>
          </div>
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
