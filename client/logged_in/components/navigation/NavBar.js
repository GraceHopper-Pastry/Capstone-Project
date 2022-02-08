// import React, { useRef, useState, useCallback, Fragment, Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import {logout} from '../store'
// import PropTypes from "prop-types";
// import classNames from "classnames";
// // The classNames function takes any number of arguments which can be a string or object. The argument 'foo' is short for { foo: true }. If the value associated with a given key is falsy, that key won't be included in the output.
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Box,
//   Button,
//   Container,
//   InputBase,
//   Badge,
//   MenuItem,
//   Menu,
//   IconButton,
//   InputBase,
//   Avatar,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Hidden,
//   Tooltip,
//   withStyles,
//   isWidthUp,
//   withWidth
// } from '@mui/material';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import ImageIcon from '@mui/icons-material/Image';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
// import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

// // add in shared and loggedin components here as well that are child components

// const styles = (theme) => ({
//   appBar: {
//     boxShadow: theme.shadows[6],
//     backgroundColor: theme.palette.common.white,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     [theme.breakpoints.down("xs")]: {
//       width: "100%",
//       marginLeft: 0,
//     },
//   },
//   userAvatar: {
//     backgroundColor: theme.palette.secondary.main,
//     height: 24,
//     width: 24,
//     marginLeft: theme.spacing(2),
//     marginRight: theme.spacing(2),
//   },
//   menuLink: {
//     textDecoration: "none",
//     color: theme.palette.text.primary,
//   },
//   textPrimary: {
//     color: theme.palette.primary.main,
//   },
//   username: {
//     paddingLeft: 0,
//     paddingRight: theme.spacing(2),
//   },
//   justifyCenter: {
//     justifyContent: "center",
//   },
// });

// const pages = ['']
