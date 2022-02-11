import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleUser } from "../store/singleUser";
import IntakeForm from "./IntakeForm";

const QuizPage = () => {
  // const intakeScore = useSelector(
  //   (state) => state.singleUserReducer.intakeScore
  // );
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchSingleUser());
  // }, []);
  return <IntakeForm />;
};

export default QuizPage;
