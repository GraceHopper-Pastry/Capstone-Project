/* eslint-disable jsx-quotes */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleUser } from '../store/singleUser';

export class MentorRelationshipBar extends Component {
  componentDidMount() {
    try {
      const userId = this.props.match.params.userId;
      return this.props.getUser(userId);
    } catch (error) {
      console.log('Mentorship will not mount', error);
    }
  }

  render() {
    return (
      <div>
        {/* NOTE
        if user is mentor show mentees ... if user is mentee show mentor
        i need to console log to understand what I have...
        */}
        <h2>Mentee</h2>
        <p>
          {user.firstName} {user.lastName}
        </p>
        <p>
          {user.jobTitle} at {user.employer}
        </p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { user: state.user };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getUser: (user) => dispatch(fetchSingleUser(user, history)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MentorRelationshipBar);
