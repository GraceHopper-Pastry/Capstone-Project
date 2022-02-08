import React from "react";
import ImageUpload from "./ImageUpload";
import UserForm from "./UserForm";

const EditUser = () => {
  return (
    <div>
      <h2>User Info</h2>
      <h3>Upload a new profile picture</h3>
      <ImageUpload />
      <h3>Edit Account details</h3>
      <UserForm />
    </div>
  );
};

export default EditUser;
