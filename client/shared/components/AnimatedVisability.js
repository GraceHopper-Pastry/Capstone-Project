import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Animated } from "react-animated-css";
/**
 * This shared class component will manage the state of all animations in our app.
 * Includes: toggle visibility and setting the timeout for the display CSS property
 */

function AnimatedVisibility({
  visible,
  children,
  animationOutDuration,
  disappearOffset,
  ...rest
}) {
  const [noDisplay, setNoDisplay] = useState(!visible);
  useEffect(() => {
    if (!visible) {
      const delay = animationOutDuration - disappearOffset;
      setTimeout(() => setNoDisplay(true), delay);
    } else setNoDisplay(false);
  }, [visible]);

  const style = noDisplay ? { display: "none" } : null;
  return (
    <Animated isVisible={visible} style={style} {...rest}>
      {children}
    </Animated>
  );
}

AnimatedVisibility.defaultProps = {
  animationOutDuration: 1000,
  disappearOffset: 350,
  visible: true
};

AnimatedVisibility.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  animationOutDuration: PropTypes.number,
  disappearOffset: PropTypes.number,
  visible: PropTypes.bool
};

function makeAnimated(
  Component,
  animationIn,
  animationOut,
  animationInDuration,
  animationOutDuration,
  disappearOffset
) {
  return function({ open, className, ...props }) {
    return (
      <AnimatedVisibility
        visible={open}
        animationIn={animationIn}
        animationOut={animationOut}
        animationInDuration={animationInDuration}
        animationOutDuration={animationOutDuration}
        disappearOffset={disappearOffset}
        className={className}
      >
        <Component {...props} />
      </AnimatedVisibility>
    );
  };
}

export function makeAnimationSlideLeft(Component) {
  return makeAnimated(Component, "slideInLeft", "slideOutLeft", 400, 500, 200);
}

export function makeAnimationSlideUpDown(Component) {
  return makeAnimated(Component, "slideInDown", "slideOutUp", 400, 500, 200);
}

export default AnimatedVisibility;
