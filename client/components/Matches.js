import React from 'react';
import { connect } from 'react-redux';
import { fetchMatches } from '../store/matches';
import { updateUser } from '../store/singleUser';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

class Matches extends React.Component {
  constructor() {
    super();
    this.selectMentor = this.selectMentor.bind(this);
  }

  componentDidMount() {
    try {
      const intakeScore = this.props.user.intakeScore;
      return this.props.fetchMatches(intakeScore);
    } catch (error) {
      console.log('MATCHES COMPONENT WILL NOT MOUNT', error);
    }
  }

  selectMentor(event, mentor) {
    event.preventDefault();
    console.log('IN SELECT MENTOR');
    const user = this.props.user;
    user.Mentors = [mentor];
    this.props.updateUser(user);
  }

  render() {
    console.log('Matches render', this.props);
    const matches = this.props.matches;

    return (
      <div>
        <h1>Your Top Mentor Matches</h1>
        <div>
          <Link to={`/users`}>RETURN TO PROFILE </Link>
          {matches.map((mentor) => (
            <div>
              <li key={mentor.id}>
                {mentor.firstName} {mentor.lastName}
              </li>
              <img width={'200vw'} src={mentor.profilePic} />
              <button
                type='submit'
                onClick={(event) => this.selectMentor(event, mentor)}
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
  updateUser: (user) => dispatch(updateUser(user, history)),
});

export default connect(mapState, mapDispatch)(Matches);
