import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  Typography,
  Toolbar
} from '@mui/material';
import {  withStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';

const styles = theme => ({
  list: {
    backgroundColor: theme.palette.common.grey,
    height: "100%"
  },
  closeIcon: {
    marginLeft: theme.spacing(0.5)
  },
  headerSection: {
    width: 200
  },
  noDecoration: {
    textDecoration: "none !important"
  }
});


const NavigationDrawer = props => {
  const { open, onClose, anchor, classes, menuPages, selectedTab, theme } = props;

  return (
    <Drawer variant="temporary" open={open} onClose={onClose} anchor={anchor}>
      <Toolbar className={classes.headSection}>
        <ListItem
          style={{
            paddingTop: theme.spacing(0),
            paddingBottom: theme.spacing(0),
            height: "100%",
            justifyContent: anchor === "left" ? "flex-start" : "flex-end"
          }}
          disableGutters
        >
          <ListItemIcon className={classes.closeIcon}>
            <IconButton onClick={onClose} aria-label="Close Navigation">
              <CloseIcon color="primary" />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </Toolbar>
      <List className={classes.list}>
        {menuPages.map(page => {
          if (page.link) {
            return (
              <Link
                key={page.name}
                to={page.link}
                className={classes.noDecoration}
                onClick={onClose}
              >
                <ListItem
                  button
                  selected={selectedTab === page.name}
                  /**
                   * We disable ripple as it will make a weird animation
                   * with primary and secondary color
                   */
                  disableRipple
                  disableTouchRipple
                >
                  <ListItemIcon>{page.icon}</ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" className="text-white">
                        {page.name}
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
            );
          }
          return (
            <ListItem button key={page.name} onClick={page.onClick}>
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" className="text-white">
                    {page.name}
                  </Typography>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}

NavigationDrawer.propTypes = {
  anchor: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  menuPages: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.object.isRequired,
  selectedTab: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(NavigationDrawer);




