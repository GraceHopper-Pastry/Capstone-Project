import React from 'react';
import { connect } from 'react-redux';
import { fetchMatches } from '../store/matches';
import { updateUser } from '../store/singleUser';

class Matches extends React.Component {
  componentDidMount() {
    try {
      const intakeScore = this.props.auth.intakeScore;
      return this.props.fetchMatches(intakeScore);
    } catch (error) {
      console.log('THIS ROBOT WILL NOT MOUNT', error);
    }
  }

  selectMentor(event) {
    const user = this.props.auth.id
    mentor.id
  }

  render() {
    console.log('Matches render', this.props);
    const matches = this.props.matches;

    return (
      <div>
        <h1>Your Top Mentor Matches</h1>
        <div>
          {matches.map((mentor) => (
            <div>
              <li key={mentor.id}>
                {mentor.firstName} {mentor.lastName}
              </li>
              <img src={mentor.profilePic} />
              <button
                type='submit'
                onClick={(event) => this.selectMentor(event)}
              >
                Select Mentor
              </button>
            </div>
          ))}
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
  updateUser: () => dispatch(updateUser()),
});

export default connect(mapState, mapDispatch)(Matches);
