import React from "react";
import { useSelector } from "react-redux";
import LoggedOutNavBar from "../../logged_out/components/LoggedOutNavBar";
import LoggedInNavBar from "../../logged_in/loggedInNavBar";

const Navigation = (props) => {
  const isLoggedIn = !!useSelector((state) => state.auth.id);

  return <div>{isLoggedIn ? <LoggedInNavBar /> : <LoggedOutNavBar />}</div>;
};

export default Navigation;
