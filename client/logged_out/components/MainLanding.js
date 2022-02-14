import React, { memo, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from '@mui/styles';
import HeaderSection from './landing_page/HeaderSection';
import OfferSection from './landing_page/OfferSection';
import Footer from './footer/Footer';
import CookieConsentPopup from './landing_page/CookieConsentPopup'



const styles = (theme) => ({
  wrapper: {
    backgroundColor: theme.palette.common.white,
    overflowX: "hidden",
  },
});

const MainLanding = props => {
  const { classes } = props;
  // console.log(getCookieConsentValue());
  return (
    <div className={classes.wrapper}>
      <CookieConsentPopup />
        <HeaderSection />
        <Footer />
    </div>
  )
}

MainLanding.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(MainLanding));


