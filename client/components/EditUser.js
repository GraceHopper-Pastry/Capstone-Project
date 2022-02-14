import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import ImageUpload from "./ImageUpload";
import UserForm from "./UserForm";

const EditUser = () => {
  const { profilePic } = useSelector((state) => state.singleUserReducer);
  return (
    <div style={{ marginBottom: "25px" }}>
      <div style={{ marginLeft: "25px" }}>
        <h2>User Info</h2>
        <img
          src={profilePic}
          style={{
            width: "150px",
            height: "150px",
            fit: "cover",
            padding: "10px",
          }}
        />
        <div className="upload">
          <ImageUpload />
          <p>Upload a new profile picture</p>
        </div>
        <h3>Edit Account details</h3>
      </div>
      <UserForm />
    </div>
  );
};

export default EditUser;
