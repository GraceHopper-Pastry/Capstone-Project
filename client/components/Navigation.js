import React from "react";
import { useSelector } from "react-redux";
import LoggedOutNavBar from "./LoggedOutNavBar";
import LoggedInNavBar from "./LoggedInNavBar";

const Navigation = (props) => {
  const isLoggedIn = !!useSelector((state) => state.auth.id);

  return <div>{isLoggedIn ? <LoggedInNavBar /> : <LoggedOutNavBar />}</div>;
};

export default Navigation;
