import React from "react";
import { connect } from "react-redux";
import { fetchSingleUser } from "../store/singleUser";
import ImageUpload from "./ImageUpload";

class SingleUser extends React.Component {
  componentDidMount() {
    this.props.fetchSingleUser();
  }

  render() {
    const user = this.props.user || {};
    return (
      <div>
        <h2>Profile</h2>
        <div className="single-user">
          {user.profilePic ===
          "https://zultimate.com/wp-content/uploads/2019/12/default-profile.png" ? (
            <div>
              <img width={"20vw"} src={user.profilePic} />
              <p>Upload a profile pic!</p>
              <ImageUpload />
            </div>
          ) : (
            <img width="100px" src={user.profilePic} />
          )}
          <p>First name: {user.firstName}</p>
          <p>Last name: {user.lastName}</p>
          <p>Email: {user.email}</p>
          <p>Employer: {user.bio}</p>
          <p>Job Title: {user.jobTitle}</p>
          <p>Location: {user.location}</p>
          <p>Industry: {user.industry}</p>
          <p>Years in Tech: {user.yearsInTech}</p>
          <p>School: {user.school}</p>
          <p>Area of Study: {user.areaOfStudy}</p>
          <p>End Year: {user.endYear}</p>
        </div>
        <div>
          <div className="column right">
            <h2>Start a Conversation</h2>
            <div>
              {/* IF USER IS A MENTOR */}
              {user.isMentor ? (
                <div>
                  <h2>Your Mentees:</h2>
                  <div>
                    {user.Mentees.length ? (
                      <div>
                        {/* IF MENTOR HAS BEEN ASSIGNED MENTEES */}
                        <h2>
                          {user.Mentees.map((person) => (
                            <p>
                              <li key={person.id}>
                                {person.firstName} {person.lastName}
                              </li>
                              <img src={person.profilePic} />
                            </p>
                          ))}
                        </h2>
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
                    {user.Mentors ? (
                      <div>
                        <h2>
                          {user.Mentors.map((person) => (
                            <p>
                              <li key={person.id}>
                                {person.firstName} {person.lastName}
                              </li>
                              <img src={person.profilePic} />
                            </p>
                          ))}
                        </h2>
                      </div>
                    ) : (
                      <div>
                        {/* IF USER HAS NOT YET BEEN ASSIGNED A MENTOR */}
                        <h1>Check back soon to meet your new mentor!</h1>
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
