import React from "react";
import { Button } from "@mui/material";
import { updateUser } from "../store/singleUser";
import { useDispatch } from "react-redux";

const ImageUpload = () => {
  const dispatch = useDispatch();

  const showWidget = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "grace-hopper-team-pastry",
        uploadPreset: "ctr9lvj0",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          dispatch(updateUser({ profilePic: `${result.info.url}` }, history));
          console.log("Done! Here is the image info: ", result.info.url);
        }
      }
    );
    widget.open();
  };

  return (
    <div>
      <Button
        id="upload_widget"
        className="cloudinary-button"
        onClick={showWidget}
      >
        Upload Profile Pic
      </Button>
    </div>
  );
};

export default ImageUpload;
