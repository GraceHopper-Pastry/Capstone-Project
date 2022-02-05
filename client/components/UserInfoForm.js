import React from "react";
import UserForm from "./userForm";
import CloudinaryUploadWidget from "./ImageUpload";

const UserInfoForm = () => {
  return (
    <div>
      <CloudinaryUploadWidget />
      <UserForm />
    </div>
  );
};

export default UserInfoForm;
