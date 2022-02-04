import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import QuizPopup from "./QuizPopup";

import Footer from "../logged_out/components/footer/Footer";
import { dividerClasses, Button } from "@mui/material";
/**
 * COMPONENT
 */
// export const Home = (props) => {
//   const { username } = props;

const Home = ({ firstName, id, intakeScore }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/userform");
  };

  return (
    <div>
      {!firstName ? (
        <Button type="button" variant="outlined" onClick={handleClick}>
          Find your mentor!
        </Button>
      ) : (
        <div>
          <h3> Welcome, {firstName} </h3>
          <Link to={`/users/${id}`}>
            <p>View Profile</p>
          </Link>

          <QuizPopup intakeScore={intakeScore} />
        </div>
      )}

      {/* {firstName && intakeScore ? (
        <div>
          <h3> Welcome, {firstName} </h3>
          <Link to={`/users/${id}`}>
            <p>View Profile</p>
          </Link>
        </div>
      ) : firstName && !intakeScore ? (
        <QuizPopup />
      ) : (
        <Button type="button" variant="outlined" onClick={handleClick}>
          Find your mentor!
        </Button>
      )} */}

      <Footer />
    </div>
  );
};

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
