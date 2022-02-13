import React from "react";
import ImageUpload from "./ImageUpload";
import UserForm from "./userForm";

const Onboarding = () => {
  return (
    <div>
      <h1>Upload a profile Pic!</h1>
      <ImageUpload />

      <UserForm />
    </div>
  );
};

export default Onboarding;
