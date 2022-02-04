import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import QuizPopup from "./QuizPopup";
import UserForm from "./userForm";
import Footer from "../logged_out/components/footer/Footer";
import { dividerClasses, Button } from "@mui/material";
/**
 * COMPONENT
 */
// export const Home = (props) => {
//   const { username } = props;

const Home = ({ firstName, id, intakeScore }) => {
  let history = useHistory();

  return (
    <div>
      {!firstName ? (
        <UserForm />
      ) : (
        <div>
          <h3> Welcome, {firstName} </h3>
          <Link to={`/users/${id}`}>
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
    firstName: state.userReducer.firstName,
    id: state.userReducer.id,
    intakeScore: state.userReducer.intakeScore,
  };
};

export default connect(mapState)(Home);
