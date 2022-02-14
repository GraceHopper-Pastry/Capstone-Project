import React from "react";
import { useSelector } from "react-redux";
import MenteeProfile from "./MenteeProfile";
import MentorProfile from "./MentorProfile";

function MatchesList(props) {
  const isMentor = !!useSelector((state) => state.singleUserReducer);
   return <div>{isMentor ? <MentorProfile /> : <MenteeProfile /> } </div>;
};

export default MatchesList;
