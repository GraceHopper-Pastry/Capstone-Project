/* eslint-disable jsx-quotes */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class MentorRelationshipBar extends Component {
  componentDidMount() {
    try {
      const userId = this.props.match.params.userId;
      return this.props.getStudent(userId);
    } catch (error) {
      console.log('Mentorship will not mount', error);
    }
  }

  render() {
    return <div></div>;
  }
}
const mapStateToProps = (state) => {
  return { user: state.user };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addStudent: (user) => dispatch(XXX(user, history)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MentorRelationshipBar);
