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
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    const intakeScore = this.props.user.intakeScore;
    this.props.fetchMatches(intakeScore);
  }

  selectMentor(mentor) {
    const user = this.props.user;
    user.Mentors = [mentor];
    this.props.updateUser(user);
    this.props.history.push("/users");
  }

  clickHandler(mentor) {
    if (this.props.user.Mentors[0]) {
      if (
        confirm(
          "Are you sure? Once you select a new mentor, you will lose your conversation history with your current mentor."
        )
      ) {
        console.log("hello");
        this.selectMentor(mentor);
      } else {
        return;
      }
    } else {
      this.selectMentor(mentor);
    }
  }

  render() {
    const matches = this.props.matches;

    return (
      <div>
        <h1>Your Top Mentor Matches</h1>
        <div>
          <Link to={`/users`}>RETURN TO PROFILE </Link>
          <div className="mentors">
            <ul>
              {matches.map((mentor) => (
                <li key={mentor.id}>
                  <div className="card">
                    <div className="flex-container"></div>
                    <h2>{mentor.firstName + " " + mentor.lastName}</h2>
                    <p>{mentor.jobTitle + " at " + mentor.employer}</p>
                    <img src={mentor.profilePic} />
                    <button
                      className="button"
                      type="button"
                      onClick={"/mentor/:mentorid"}
                    >
                      Learn More
                    </button>
                    <button
                      className="button"
                      type="submit"
                      onClick={() => this.clickHandler(mentor)}
                    >
                      Select Mentor
                    </button>
                  </div>
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
