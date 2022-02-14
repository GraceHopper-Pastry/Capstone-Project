import React from "react";
import { Link as RouterLink } from "react-router-dom";

import {makeStyles} from "@mui/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

const useStyles = makeStyles((theme) => ({
  notFoundBody: {
    width: "70%",
    padding: "2rem",
    margin: "0 auto 0 auto",
    backgroundColor: "#fcd000"
  },
  notFoundButton: {
    backgroundColor: "#e71e07",
    color: "white",
    "&:hover": {
      backgroundColor: "#44af35",
      transition: "all .3s ease"
    },
    width: "95%",
    height: "50px"
  },
  leftIcon: {
    transform: "rotate(-20deg)",
    color: "black"
  },
  rightIcon: {
    transform: "rotate(20deg)",
    color: "black"
  }
}));

const NotFound = ({ error, message }) => {
  console.log(error, message);
  if (!error) error = 404;
  if (!message) message = "OOPS! PAGE NOT FOUND";
  const styles = useStyles();
  const title = "WHO ORDERED WAFFLES?...";
  return (
    <div className="not-found-page">
      <div className="not-found-header">
        <div className="not-found-title">{title}</div>
      </div>
      <Grid container direction="row" wrap="nowrap" justifyContent="center" alignItems="center">
        <PriorityHighIcon style={{ fontSize: 300 }} className={styles.leftIcon} />
        <Paper elevation={3} className={styles.notFoundBody}>
          <div className="not-found-grid">
            <div className="not-found-right">
              <div className="title-oops">{message}</div>
              <div className="title-404">{error}</div>
              <Button
                variant="contained"
                component={RouterLink}
                to="/home"
                className={styles.notFoundButton}>
                <span className="not-found-button">Back To Home</span>
              </Button>
            </div>
            <div className="not-found-left">
              <img
                src="images/brand_logo/misc/notFound.png"
              />
            </div>
          </div>
        </Paper>
        <PriorityHighIcon style={{ fontSize: 300 }} className={styles.rightIcon} />
      </Grid>
    </div>
  );
};

export default NotFound;
