import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Grid, Typography, Card, Button, Hidden, Box } from '@mui/material';
import { withStyles } from '@mui/styles';
import WaveBorder from '../../../shared/components/WaveBorder';
import headerAsset from '../../assets/images/transparent2.png'
const styles = (theme) => ({
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up('xs')]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  // card: {
  //   boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.15)',
  //   marginLeft: theme.spacing(4),
  //   marginRight: theme.spacing(4),
  //   opacity: '85%',
  //   margin: '0 auto',
  //   padding: '15px',
  //   backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.up('xs')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down('lg')]: {
      width: 'auto',
    },
    wrapper: {
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  // image: {
  //   position: 'relative',
  //   verticalAlign: 'middle',
  //   borderRadius: theme.shape.borderRadius,
  //   boxShadow: theme.shadows[4],
  //   width: 'auto',
  // },
  container: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up('md')]: {
      maxWidth: 'none !important',
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
      <div className='landingHeader'>
        <div className='headerInner'>
        <Button
          variant='contained'
            color='secondary'
            className={classes.extraLargeButton}
            href='https://github.com/GraceHopper-Pastry/Capstone-Project'
            >
            Explore the Stack!!
          </Button>
        </div>
      </div>
      {/* <WaveBorder
        topColor={theme.palette.secondary.dark}
        bottomColor="#ffff"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      /> */}
    </Fragment>
  );
};

HeaderSection.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(HeaderSection);
