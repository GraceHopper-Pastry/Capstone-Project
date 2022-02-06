import React from "react";
import PropTypes from "prop-types";
import { Backdrop, CircularProgress, Button } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = {
  backdrop: {
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: theme.zIndex.drawer + 1,
    position: "fixed",
    touchAction: "none",
    color: "#fff"
  }
};

const BackdropModal = ({ classes, open }) => {
  return (
    <Backdrop
      open={open}
      className={classes.backdrop}
    />
  );
}

BackdropModal.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired
};

export default withStyles(styles)(BackdropModal);
