import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import QuizPopup from "./QuizPopup";
import UserInfoForm from "./UserInfoForm";
import Footer from "../logged_out/components/footer/Footer";
import { dividerClasses, Button } from "@mui/material";
/**
 * COMPONENT
 */
// export const Home = (props) => {
//   const { username } = props;

const Home = ({ firstName, intakeScore }) => {
  let history = useHistory();

  return (
    <div>
      {!firstName ? (
        <UserInfoForm />
      ) : (
        <div>
          <h3> Welcome, {firstName} </h3>
          <Link to={`/users`}>
            <p>View Profile</p>
          </Link>
          {/* passing in props for intake score to determine if the quiz popup should render. Since 0 is falsy, using a not null check */}
          <QuizPopup intakeScore={intakeScore !== null ? true : false} />
        </div>
      )}

      <Footer />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    firstName: state.userReducer.firstName || state.auth.firstName,
    id: state.userReducer.id || state.auth.id,
    intakeScore: state.userReducer.intakeScore || state.auth.intakeScore,
  };
};

export default connect(mapState)(Home);
