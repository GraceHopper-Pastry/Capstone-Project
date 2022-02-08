import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Typography, Grid } from '@mui/material';
import { withStyles } from '@mui/styles';
import OfferCard from "./OfferCard";


const styles = theme => ({
  containerFix: {
    overflow: "hidden",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2)
  },
  cardWrapper: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 300
    }
  },
  cardWrapperHighlighted: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 350
    }
  }
});

function OfferSection(props) {
  const { classes } = props;
  return (
    <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <Typography variant="h4" align="center" className="lg-mg-bottom">
        Discover Our Available Service Offerings
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid
          container
          className={classes.gridContainer}
          spacing={12}
        >
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            className={classes.cardWrapper}
          >
            <OfferCard
            highlighted
              title="Mentor Service 1"
              pricing={
                <span>
                  $5.99
                  <Typography display="inline"> / month</Typography>
                </span>
              }
              features={["Feature 1", "Feature 2", "Feature 3"]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapperHighlighted}
            xs={12}
            sm={6}
            lg={3}
          >
            <OfferCard
              highlighted
              title="Mentor Service 2"
              pricing={
                <span>
                  $5.99
                  <Typography display="inline"> / month</Typography>
                </span>
              }
              features={["Feature 1", "Feature 2", "Feature 3"]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={3}
          >
            <OfferCard
              highlighted
              title="Mentor Service 3"
              pricing={
                <span>
                  $5.99
                  <Typography display="inline"> / month</Typography>
                </span>
              }
              features={["Feature 1", "Feature 2", "Feature 3"]}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

OfferSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(OfferSection);
