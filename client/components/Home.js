import React, { useEffect } from "react";
import { connect } from "react-redux";
import reactRouterDom from "react-router-dom";
import UserForm from "./userForm";
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
        <UserForm />
      </div>
    );
  }
}
/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.auth.email,
  };
};

export default connect(mapState)(Home);
