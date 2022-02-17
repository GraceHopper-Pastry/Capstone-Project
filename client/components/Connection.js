import React from "react";
import { Grid } from "@mui/material";

const Connection = ({ mentorInfo }) => {
  return (
    <>
      <Grid container>
        <Grid item>
          <img src={mentorInfo.profilePic} />
        </Grid>
        <Grid item>
          <h3>{person.firstName + " " + person.lastName}</h3>
        </Grid>
      </Grid>
    </>
  );
};

export default Connection;
