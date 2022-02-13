import React from "react";
import ImageUpload from "./ImageUpload";
import UserForm from "./userForm";

const Onboarding = ({ profilePic }) => {
  return (
    <div className="onboarding">
      {profilePic ===
      "https://zultimate.com/wp-content/uploads/2019/12/default-profile.png" ? (
        <div>
          <img src={profilePic} />
          <h3>Upload a profile picture</h3>
          <ImageUpload />
        </div>
      ) : (
        <img style={{ width: "200" }} src={profilePic} />
      )}

      <div>
        <UserForm />
      </div>
    </div>
  );
};

export default Onboarding;
