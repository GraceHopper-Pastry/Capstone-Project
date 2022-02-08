// Placeholder for "How To" / Demo Video of the Software
import React from 'react';
import video from './videos/video.mp4'
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  withWidth,
  withStyles
} from '@mui/material'

const styles = (theme) => ({
  container: {
    position: relative,
    overflow: hidden,
    width: "100%",
    height: "100%",
  },
  video: {
    position: absolute,
    width: auto,
    height: "100%",
    top: 0,
    left: 0
  }
})

// helper function for responsive video rendering

const getVideoSrc = width => {
  if (width >= 1080) return desktopVideo;
  if (width >= 720) return tabletVideo;
  return mobileVideo;
}


const Video = (props) => {
  return (
    <div className={classes.container}>
      <video className={classes.video} playsInline muted src={video} />
    </div>
  );
};
