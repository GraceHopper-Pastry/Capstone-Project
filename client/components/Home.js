import React, { useEffect } from "react";
import { connect } from "react-redux";
import reactRouterDom from "react-router-dom";
import ExperienceDialog from "./experiencePopup";
/**
 * COMPONENT
 */
// export const Home = (props) => {
//   const { username } = props;

//   return (
//     <div>
//       <ExperienceDialog />
//       <h3>Welcome, {username}</h3>
//     </div>
//   );
// };

class Home extends React.Component {
  render() {
    return (
      <div>
        <ExperienceDialog />
        <h3>Welcome, {this.props.firstName}</h3>
      </div>
    );
  }
}
/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.firstName,
  };
};

export default connect(mapState)(Home);
