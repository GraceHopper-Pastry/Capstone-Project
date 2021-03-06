import React from "react";
import {Link as RouterLink} from "react-router-dom";
import Button from "@mui/material/Button";

export default function ComingSoonPage() {
  return (
    <div>
    <img src="./images/logged_in/coming-soon-gif.gif" alt="loading..." />
    <Button
      variant="contained"
      position="relative"
      component={RouterLink}
      to="/home"
      >
      <span className="not-found-button">Back To Home</span>
    </Button>
    </div>
  )

}

