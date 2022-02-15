import React, { memo, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import HeaderSection from "./landing_page/HeaderSection";
import Footer from "./footer/Footer";
import TechStack from "./landing_page/TechStack";

const styles = (theme) => ({
  wrapper: {
    backgroundColor: theme.palette.common.white,
    overflowX: "hidden",
  },
});

const MainLanding = (props) => {
  const { classes } = props;
  // console.log(getCookieConsentValue());
  return (
    <div className={classes.wrapper}>
      <Fragment>
        <HeaderSection />
        <TechStack />
        {/* <OfferSection /> */}
        <Footer />
      </Fragment>
    </div>
  );
};

MainLanding.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(MainLanding));
