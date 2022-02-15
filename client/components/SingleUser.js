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
        <div className="single-user">
          {user.profilePic ===
          "https://zultimate.com/wp-content/uploads/2019/12/default-profile.png" ? (
            <div>
              <img src={user.profilePic} />
              {/* <p>Upload a profile pic!</p> */}
              <ImageUpload />
            </div>
          ) : (
            <img style={{ width: "200" }} src={user.profilePic} />
          )}
          <div className="profile-data-blocks">
            <div className="my-profile-name">
              <p>First name: {user.firstName}</p>
              <p>Last name: {user.lastName}</p>
            </div>
            <p>Email: {user.email}</p>
            <p>Location: {user.location}</p>
          </div>
          <div className="profile-data-blocks">
            <p>School: {user.school}</p>
            <div className="my-profile-education">
              <p>Area of Study: {user.areaOfStudy}</p>
              <p>End Year: {user.endYear}</p>
            </div>
          </div>
          <div className="my-profile-industry profile-data-blocks">
            <p>Industry: {user.industry}</p>
            <p>Years in Tech: {user.yearsInTech}</p>
          </div>
          <div className="my-profile-employment profile-data-blocks">
            <p>Employer: {user.employer}</p>
            <p>Job Title: {user.jobTitle}</p>
          </div>
        </div>
        <div>
          {/* IF USER IS A MENTOR */}
          {user.isMentor ? (
            <div>
              <h2>Your Mentees:</h2>
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
            <div>
              {/* IF USER IS A MENTEE */}
              <h1>Your Mentor:</h1>
              <div>
                {/* IF USER HAS BEEN ASSIGNED A MENTOR */}
                {user.Mentors.length ? (
                  <div>
                    {/* IF MENTOR HAS BEEN ASSIGNED MENTEES */}
                    <ul>
                      {user.Mentors.map((person) => (
                        <li key={person.id}>
                          <h2>{person.firstName + " " + person.lastName}</h2>
                          <p>{person.jobTitle + " at " + person.employer}</p>
                          <img src={person.profilePic} />
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
                    <Link to={`/users/mentors/${user.intakeScore}`}>
                      CLICK ME!
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
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
