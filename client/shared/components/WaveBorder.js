// https://codepen.io/csspoints/pen/WNeOEqd

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";

const styles = {
  waves: {
    position: "relative",
    width: "100%",
    height: "10vw",
    minHeight: "7vw",
    marginBottom: -7,
  },
  parallax: {
    "& > use": {
      animation: "$moveForever 15s cubic-bezier(0.6, 0.5, 0.4, 0.5) infinite",
      animationDelay: (props) => `-${props.animationNegativeDelay}s`,
    },
  },
  "@keyframes moveForever": {
    from: { transform: "translate3d(-90px, 0, 0)" },
    to: { transform: "translate3d(85px, 0, 0)" },
  },
};

const WaveBorder = (props) => {
  const id = String(Math.random());
  const {
    className,
    topColor,
    bottomColor,
    classes,
    animationNegativeDelay,
    ...rest
  } = props;
  return (
    <div className={className} style={{ background: topColor }} {...rest}>
      <svg
        className={classes.waves}
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id={id}
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className={classes.parallax}>
          <use href={`#${id}`} x="48" y="0" fill={bottomColor} />
        </g>
      </svg>
    </div>
  );
};

WaveBorder.propTypes = {
  topColor: PropTypes.string.isRequired,
  bottomColor: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  animationNegativeDelay: PropTypes.number.isRequired,
};

export default withStyles(styles)(WaveBorder);
