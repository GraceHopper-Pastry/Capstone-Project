import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Paper } from "@mui/material";
import { fetchMentor } from "../store/mentor";

const Connection = (props) => {
  const mentor = useSelector((state) => state.mentorReducer);
  const dispatch = useDispatch();
  console.log(props);
  useEffect(() => {
    const id = props.match.params.mentorId;
    dispatch(fetchMentor(id));
  }, []);

  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        marginTop: 10,
        maxWidth: 750,
        flexGrow: 1,
      }}
      className="Mentor"
    >
      <Grid
        container
        direction="row"
        flexWrap="nowrap"
        alignItems="flex-end"
        className="mentorInfo"
      >
        <Grid item>
          <img src={mentor.profilePic} />
        </Grid>
        <Grid item container direction="column">
          <Grid item id="name">
            {mentor.firstName + " " + mentor.lastName}
          </Grid>
          <Grid item id="jobInfo">
            {mentor.jobTitle + " at " + mentor.employer}
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="column" width="30vw">
        <Grid item mb={3}>
          <span style={{ fontWeight: "bold" }}>Bio </span>
          {mentor.bio}
        </Grid>
        <Grid item mb={1}>
          <span style={{ fontWeight: "bold" }}>Email </span>
          {mentor.email}
        </Grid>
        <Grid item mb={1}>
          <span style={{ fontWeight: "bold" }}>Location </span>
          {mentor.location}
        </Grid>
        <Grid item>
          <span style={{ fontWeight: "bold" }}>Years in Tech </span>
          {mentor.yearsInTech}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Connection;
