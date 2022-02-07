import React from "react";
import { Link, useHistory } from "react-router-dom";
import ImageUpload from "./ImageUpload";

import { Button, Stack } from "@mui/material";

const AccountSettings = () => {
  return (
    <Stack>
      <Button color="inherit" size="medium">
        Edit Email and Password
      </Button>
      <Button component={Link} to={"/users/edit"} color="inherit" size="medium">
        Edit Info
      </Button>
      <Button color="inherit" size="medium">
        View Mentor Options
      </Button>
    </Stack>
  );
};

export default AccountSettings;
