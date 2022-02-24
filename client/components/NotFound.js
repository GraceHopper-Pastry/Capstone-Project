import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Footer from "../logged_out/components/footer/Footer"

import {makeStyles} from "@mui/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

const useStyles = makeStyles((theme) => ({
  notFoundButton: {
    backgroundColor: "#e71e07",
    color: "white",
    "&:hover": {
      backgroundColor: "#44af35",
      transition: "all .3s ease"
    },
  },
  notFoundImage: {
    width: "-webkit-fill-available",
    height: "-webkit-fill-available"
  }
}));

function NotFound() {
  const classes = useStyles();
  return (
    <Box
      sx={{
      display: "flex",
      p: 1,
      m: 1,
      height: "100%",
      alignItems: "center",
      flexDirection: "column",
      flexWrap: "wrap",
      bgcolor: "grey.100",
      color: "grey.800",
      overflowY: "hidden"

    }}
    >
    <IconButton
      variant="contained"
      position="absolute"
      bgColor="lightblue"
      left="5%"
      top="-10%"
      component={RouterLink}
      to="/home"
      label="Back To Home"
      className={classes.notFoundButton}>
        <Typography variant="button" fontWeight="bold" textTransform="capitalize">Back to Home
      </Typography>
    </IconButton>
    <img className={classes.notFoundImage} src="./images/brand_logo/misc/notFound.png" alt="loading..."  />
    <Footer />
  </Box>



  )
}

export default NotFound

