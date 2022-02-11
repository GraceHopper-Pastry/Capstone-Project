/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import { me } from "./store";
import MainLanding from "./logged_out/components/MainLanding";
import SingleUser from "./components/SingleUser";
import AccountSettings from "./components/AccountSettings";
import EditUser from "./components/EditUser";
import Matches from "./components/Matches";
import QuizPopup from "./components/QuizPopup";
import MainChat from "./components/Chat/MainChat";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/users" component={SingleUser} />
            <Route path="/account" component={AccountSettings} />
            <Route exact path="/users/edit" component={EditUser} />
            <Route
              exact
              path="/users/mentors/:intakeScore"
              component={Matches}
            />
<<<<<<< HEAD
            <Redirect to='/home' />
=======
            <Route path="/users/quiz" component={QuizPopup} />
            <Route path="/users/chat" component={MainChat} />
            <Redirect to="/home" />
>>>>>>> main
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={MainLanding} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Redirect to="/" />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
