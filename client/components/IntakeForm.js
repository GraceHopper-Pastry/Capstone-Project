import React, { useState } from "react";
import { Button, Card } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateUser } from "../store/users";
import { useHistory } from "react-router-dom";

function IntakeForm({ handleClose }) {
  const questions = [
    {
      questionText: "Your first programming language was...",
      answerOptions: [
        { answerText: "Javascript", value: 0 },
        { answerText: "Python", value: 1 },
      ],
    },
    {
      questionText: "Your favorite piece of technology is ...",
      answerOptions: [
        { answerText: "your smart watch", value: 0 },
        { answerText: "TikTok", value: 1 },
      ],
    },
    {
      questionText: "You're most like a character on...",
      answerOptions: [
        { answerText: "Halt and Catch Fire", value: 0 },
        { answerText: "The Social Network", value: 1 },
      ],
    },
    {
      questionText: "During an interview, you'd rather implement...",
      answerOptions: [
        { answerText: " Merge Sort", value: 0 },
        { answerText: "a quiz in React", value: 1 },
      ],
    },
  ];
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (value) => {
    setScore(score + value);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      dispatch(updateUser({ intakeScore: `${score}` }, history));
      () => handleClose();
    }
  };
  return (
    <>
      <Card variant="outlined">
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].questionText}
          </div>
        </div>
        <div className="answer-section">
          {questions[currentQuestion].answerOptions.map((answerOption) => (
            <Button
              key={answerOption.answerText}
              variant="contained"
              onClick={() => handleAnswerOptionClick(answerOption.value)}
            >
              {answerOption.answerText}
            </Button>
          ))}
        </div>
      </Card>
    </>
  );
}

export default IntakeForm;
