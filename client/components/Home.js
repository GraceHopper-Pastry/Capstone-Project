import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../logged_out/components/footer/Footer";
import { fetchSingleUser } from "../store/singleUser";
import { dividerClasses, Button } from "@mui/material";
import UserForm from "./UserForm";
// import singleUserReducer from "../store/singleUser";
/**
 * COMPONENT
 */
// export const Home = (props) => {
//   const { username } = props;

const Home = () => {
  const { firstName, intakeScore } = useSelector(
    (state) => state.singleUserReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleUser());
  }, []);
  return (
    <div>
      {!firstName ? (
        <UserForm />
      ) : (
        <div>
          <h3> Welcome, {firstName} </h3>
          <Link to={`/users`}>
            <p>View Profile</p>
          </Link>
        </div>
      )}

      <Footer />
    </div>
  );
};

/**
 * CONTAINER
 */
// const mapState = (state) => {
//   return {
//     firstName: state.singleUserReducer.firstName || state.auth.firstName,
//     id: state.singleUserReducer.id || state.auth.id,
//     intakeScore: state.singleUserReducer.intakeScore || state.auth.intakeScore,
//   };
// };

// export default connect(mapState)(Home);

export default Home;
