import React, {Fragment, useState} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  Button,
   Stack,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const styles = (theme) => ({
  numberInput: {
    width: 110,
  },
  numberInputInput: {
    padding: "9px 34px 9px 14.5px",
  },
  dBlock: { display: "block" },
  listItemLeftPadding: {
    paddingRight: theme.spacing(3),
  },
  accordionDetails: {
    paddintTop: theme.spacing(0),
    justifyContent: "flex-end",
  },
});

const AccountSettings = () => {
  const { intakeScore, isMentor } = useSelector(
    (state) => state.singleUserReducer
  );
  const [isSaveLoading, setIsSaveLoading] = useState(false);


  return (
    <Stack>
      <Button color="inherit" size="medium">
        Edit Email and Password
      </Button>
      <Button component={Link} to={"/users/edit"} color="inherit" size="medium">
        Edit Info
      </Button>
      {!isMentor && (
        <Button
          component={Link}
          to={`/users/mentors/${intakeScore}`}
          color="inherit"
          size="medium"
        >
          View Mentor Options
        </Button>
      )}
    </Stack>
  );
};

export default AccountSettings;
