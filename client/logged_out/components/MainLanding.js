import React, { memo, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
// import AOS from 'aos';
import { withStyles } from '@mui/styles';
import NavBar from './navigation/NavBar';
import Footer from './footer/Footer';
// import "aos/dist/aos.css";

// AOS.init({ once: true });

const styles = (theme) => ({
  wrapper: {
    backgroundColor: theme.palette.common.white,
    overflowX: "hidden",
  },
});

const MainLanding = props => {
  const { classes } = props;
  const [selectedTab, setSelectedTab] = useState(null, classes);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const selectHome = useCallback(() => {
    document.title =
      "Mentorship Match"
    setSelectedTab("Home");
  }, [setSelectedTab]);

  const handleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(true);
  }, [setIsDrawerOpen]);

  const handleDrawerClose = useCallback(() => {
    setIsDrawerOpen(false);
  }, [setIsDrawerOpen]);

  return (
    <div className={classes.wrapper}>
      <NavBar
        selectedTab={selectedTab}
        selectTab={setSelectedTab}
        // openLoginForm={openLoginForm}
        // openSignUpForm={openSignUpForm}
        DrawerOpen={isDrawerOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawClose={handleDrawerClose}
      />
      <Footer />
    </div>
  )
}

MainLanding.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(MainLanding));
