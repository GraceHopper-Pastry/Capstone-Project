import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  Card,
  Button,
  Hidden,
  Box,
} from "@mui/material";
import {withStyles} from '@mui/styles'
import WaveBorder from "../../../shared/components/WaveBorder";

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
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
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
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.common.white,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2)
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
    width: "auto"

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

const HeaderSection = props => {
  const { classes, theme } = props;

  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
      <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box justifyContent="space-between" className="row">
                  <Grid item xs={12} md={5}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      height="100%"
                    >
                      <Box mb={4}>
                        <Typography
                          variant="h4"
                        >
                          Stack Support: It's On Us
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography
                            variant="h6"
                            color="textSecondary"
                          >
                           The Largest Community of Mentors is Coming in Hot!
                          </Typography>
                        </Box>
                        <Button
                          variant="contained"
                          color="secondary"
                          fullWidth
                          className={classes.extraLargeButton}
                          href="https://github.com/GraceHopper-Pastry/Capstone-Project"
                        >
                          Check us out on GitHub!
                      </Button>
                      <Button
                          variant="contained"
                          color="secondary"
                          fullWidth
                          href="https://docs.google.com/forms/d/e/1FAIpQLSfFAIo5CIe6KQVHzcQtHRStowX4wl4YIlTOV5mlBk9vlCpORQ/viewform?usp=sf_link"
                        >
                          Provide us with Feedback!
                      </Button>
                    </div>
                  </Box>
                </Grid>
                <Grid item md={8}>
                  <img src="/images/logged_out/headerPlaceholder.jpg" className={classes.image} alt="header placeholder" />
                </Grid>
              </Box>
            </div>
          </Card>
        </Box>
      </div>
    </div>
    <WaveBorder
      topColor={theme.palette.common.white}
      bottomColor={theme.palette.common.grey}
      className={classes.waveBorder}
      animationNegativeDelay={2}
    />
    </Fragment>
  )
}

HeaderSection.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object
}

export default withStyles(styles, { withTheme: true })(HeaderSection);
