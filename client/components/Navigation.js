import React from "react";
import { useSelector } from "react-redux";
import LoggedOutNavBar from "./loggedOutNavBar";
import LoggedInNavBar from "./loggedInNavBar";

const Navigation = (props) => {
  const isLoggedIn = !!useSelector((state) => state.auth.id);

  return <div>{isLoggedIn ? <LoggedInNavBar /> : <LoggedOutNavBar />}</div>;
};

export default Navigation;
