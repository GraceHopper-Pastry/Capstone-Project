import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Typography, Card, Button, Hidden, Box } from "@mui/material";
import { withStyles } from "@mui/styles";
import WaveBorder from "../../../shared/components/WaveBorder";
import headerAsset from "../../../../public/images/transparent2.png";
const styles = (theme) => ({
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  [theme.breakpoints.up("xs")]: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  [theme.breakpoints.up("sm")]: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(5.5),
    paddingBottom: theme.spacing(5.5),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  [theme.breakpoints.up("lg")]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  [theme.breakpoints.down("lg")]: {
    width: "auto",
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.common.white,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  container: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    paddingBottom: theme.spacing(2),
  },
});

const HeaderSection = (props) => {
  const { classes, theme } = props;

  return (
    <Fragment>
      <div className="landingHeader">
        <div className="headerInner">
          <Button
            variant="contained"
            color="secondary"
            className={classes.extraLargeButton}
            href="https://github.com/cph2134/Capstone-Project"
          >
            Explore the Stack!!
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

HeaderSection.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(HeaderSection);
