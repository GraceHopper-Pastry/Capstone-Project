import React from "react";
import ImageUpload from "./ImageUpload";
import UserForm from "./UserForm";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

const styles = (theme) => ({
  onboarding: {
    display: "flex",
    flexDirection: "column",
  },
});

const Onboarding = ({ profilePic, classes }) => {
  return (
    <div className={classes.onboarding}>
      <div style={{ marginLeft: "25px" }}>
        <h2>Tell us about yourself</h2>
        {profilePic ===
        "https://zultimate.com/wp-content/uploads/2019/12/default-profile.png" ? (
          <div>
            <img src={profilePic} />
            <h3>Upload a profile picture</h3>
            <ImageUpload />
          </div>
        ) : (
          <>
            <img
              style={{ width: "150px", height: "150px", fit: "cover" }}
              src={profilePic}
            />
            <ImageUpload />
          </>
        )}
      </div>
      <div>
        <UserForm />
      </div>
    </div>
  );
};

Onboarding.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Onboarding);
