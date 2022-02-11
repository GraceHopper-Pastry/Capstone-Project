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
    const intakeScore = this.props.user.intakeScore;
    this.props.fetchMatches(intakeScore);
  }

  selectMentor(event, mentor) {
    const user = this.props.user;
    user.Mentors = [mentor];
    this.props.updateUser(user);
    this.props.history.push('/users');
  }

  render() {
    const matches = this.props.matches;

    return (
      <div>
        <h1>Your Top Mentor Matches</h1>
        <div>
          <Link to={`/users`}>RETURN TO PROFILE </Link>
          <div className='mentors'>
            <ul>
              {matches.map((mentor) => (
                <li key={mentor.id}>
                  <div className='card'>
                    <div className='flex-container'></div>
                    <h2>{mentor.firstName + ' ' + mentor.lastName}</h2>
                    <p>{mentor.jobTitle + ' at ' + mentor.employer}</p>
                    <img src={mentor.profilePic} />
                    <button
                      class='button'
                      type='button'
                      onClick={'/mentor/:mentorid'}
                    >
                      Learn More
                    </button>
                    <button
                      class='button'
                      type='submit'
                      onClick={(event) => this.selectMentor(event, mentor)}
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
