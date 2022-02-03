import React, { useState } from "react";

import { useFormik, Form, Field } from "formik";
import * as yup from "yup";
import { TextField, Button, Stack } from "@mui/material";

export default function IntakeForm() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", value: 0 },
        { answerText: "London", value: 1 },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", value: 0 },
        { answerText: "Elon Musk", value: 1 },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", value: 0 },
        { answerText: "Intel", value: 1 },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", value: 0 },
        { answerText: "4", value: 1 },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (value) => {
    setScore(score + value);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    // <div className="app">
    //   {showScore ? (
    //     <div className="score-section">
    //       You scored {score} out of {questions.length}
    //     </div>
    //   ) : (
    <>
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
          <button onClick={() => handleAnswerOptionClick(answerOption.value)}>
            {answerOption.answerText}
          </button>
        ))}
      </div>
    </>
  );
}
