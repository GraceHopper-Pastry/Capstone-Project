import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Button, Stack } from "@mui/material";

const AccountSettings = () => {
  const { intakeScore } = useSelector((state) => state.singleUserReducer);
  return (
    <Stack>
      <Button color="inherit" size="medium">
        Edit Email and Password
      </Button>
      <Button component={Link} to={"/users/edit"} color="inherit" size="medium">
        Edit Info
      </Button>
      <Button
        component={Link}
        to={`/users/mentors/${intakeScore}`}
        color="inherit"
        size="medium"
      >
        View Mentor Options
      </Button>
    </Stack>
  );
};

export default AccountSettings;
