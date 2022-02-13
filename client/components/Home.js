import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../logged_out/components/footer/Footer";
import { fetchSingleUser } from "../store/singleUser";
import { dividerClasses, Button } from "@mui/material";
import UserForm from "./UserForm";
import QuizPage from "./StaticQuizPage";
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
      <div id="home-container">
        <img
          className="home-image"
          src="images/logged_out/mentorship6.jpg"
        ></img>
        <div class="shape"></div>
        <div className="text-block">
          <div>
            {!firstName ? (
              <UserForm />
            ) : (
              <div>
                <div className="welcome">
                  WELCOME {firstName.toUpperCase()}!
                </div>
                <h2>
                  CONTINUE TO ACHIEVE YOUR CAREER GOALS WITH THE HELP OF STACK
                  SUPPORT
                </h2>
                <Button component={Link} to={"/users"} variant="contained">
                  GET STARTED
                </Button>
              </div>
            )}
          </div>
        </div>
        <Link to={`/users`}>
          <p>View Profile</p>
        </Link>
      </div>
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
