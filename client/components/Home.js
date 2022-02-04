import React, { useEffect } from "react";
import { connect } from "react-redux";
import UserForm from "./userForm";

import Footer from "../logged_out/components/footer/Footer";
/**
 * COMPONENT
 */
// export const Home = (props) => {
//   const { username } = props;

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <UserForm />
        {/* <ExperienceDialog /> */}
        <h3>Welcome, {this.props.firstName}</h3>

        <Link to={`/users/${this.props.id}`}>
          <p>View Profile</p>
        </Link>
        <Footer />
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    firstName: state.auth.firstName,
    id: state.auth.id,
  };
};

export default connect(mapState)(Home);
