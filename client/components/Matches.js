import React from 'react';
import { connect } from 'react-redux';
import { fetchMatches } from '../store/matches';
import { updateUser } from '../store/singleUser';

class Matches extends React.Component {
  componentDidMount() {
    this.props.fetchMatches();
  }

  render() {
    return (
      <div>
        <h1>Your Top Mentor Matches</h1>
        <p>
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
          <img src={user.profilePic} />
          <button type='submit'>Select Mentor</button>
        </p>
      </div>
    );
  }
}

const mapState = (state) => ({
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  fetchMatches: () => dispatch(fetchMatches()),
  updateUser: () => dispatch(updateUser()),
});

export default connect(mapDispatch, mapState)(Matches);
