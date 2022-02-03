import React from "react";
import UserForm from "./components/userForm";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
import IntakeForm from "./components/IntakeForm";
import ImageUpload from "./components/ImageUpload";
import QuizPopup from "./components/QuizPopup";
import showUploadWidget from "./components/ImageUpload";
const App = () => {
  return (
    <div>
      {/* <QuizPopup /> */}
      {/* <UserForm /> */}
      {/* <ImageUpload /> */}
      {/* <IntakeForm /> */}
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
