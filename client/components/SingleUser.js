import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleUser } from '../store/singleUser';

class SingleUser extends React.Component {
  componentDidMount() {
    console.log('CDM', 'TESTING???');
    this.props.fetchSingleUser(this.props.match.params.id);
  }

  render() {
    const { user } = this.props;
    console.log('profileRender', this.props.match.params.id);
    return (
      <div>
        <h2>Profile</h2>
        <div className='single-user'>
          <img src={user.profilePic} />
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
          <div className='column right'>
            <h2>Start a Conversation</h2>
            <MentorRelationshipBar />
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  fetchSingleUser: (id) => dispatch(fetchSingleUser(id)),
});

export default connect(mapState, mapDispatch)(SingleUser);
