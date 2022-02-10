import React from "react";
import { connect } from "react-redux";
import { fetchMatches } from "../store/matches";
import { updateUser } from "../store/singleUser";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

class Matches extends React.Component {
  constructor() {
    super();
    this.selectMentor = this.selectMentor.bind(this);
  }

  componentDidMount() {
    const intakeScore = this.props.user.intakeScore;
    this.props.fetchMatches(intakeScore);
  }

  selectMentor(event, mentor) {
    event.preventDefault();
    const user = this.props.user;
    user.Mentors = [mentor];
    this.props.updateUser(user);
    this.props.history.push("/users");
  }

  render() {
    const matches = this.props.matches;

    return (
      <div>
        <h1>Your Top Mentor Matches</h1>
        <div>
          <Link to={`/users`}>RETURN TO PROFILE </Link>
          <div>
            <ul>
              {matches.map((mentor) => (
                <li key={mentor.id}>
                  <h2>{mentor.firstName + " " + mentor.lastName}</h2>
                  <img width={"200px"} src={mentor.profilePic} />
                  <button
                    type="submit"
                    onClick={(event) => this.selectMentor(event, mentor)}
                  >
                    Select Mentor
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  auth: state.auth,
  user: state.singleUserReducer,
  matches: state.matchesReducer,
});

const mapDispatch = (dispatch) => ({
  fetchMatches: (intakeScore) => dispatch(fetchMatches(intakeScore)),
  updateUser: (user) => dispatch(updateUser(user, history)),
});

export default connect(mapState, mapDispatch)(Matches);
