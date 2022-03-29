import React from 'react';
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import linearGradient from "../functions/linearGradient";
import pxToRem from "../functions/pxToRem";
import PropTypes from "prop-types";


export default styled(Avatar)(({theme}) => {
  const { palette } = theme;
  const { gradients, common, background } = palette;
  const bgColor = background.default
  const backgroundValue = linearGradient(gradients[bgColor], gradients.primary.state)

  const fontSize = {
  xs: pxToRem(12),
  sm: pxToRem(14),
  md: pxToRem(16),
  lg: pxToRem(18),
  xl: pxToRem(20),
  xxl: pxToRem(24),
  xxxl: pxToRem(30),
  }

  const size = fontSize;

  let sizeValue;
  switch (size) {
    case "xs":
      sizeValue = {
        width: pxToRem(24),
        height: pxToRem(24),
        fontSize: fontSize.xs
      };
      break;
    case "sm":
      sizeValue = {
        width: pxToRem(36),
        height: pxToRem(36),
        fontSize: fontSize.sm
      };
      break;
    case "lg":
      sizeValue = {
        width: pxToRem(58),
        height: pxToRem(58),
        fontSize: fontSize.lg,
      };
      break;
    case "xl":
      sizeValue = {
        width: pxToRem(74),
        height: pxToRem(74),
        fontSize: fontSize.md,
      };
      break;
      case "xxl":
        sizeValue = {
          width: pxToRem(110),
          height: pxToRem(110),
          fontSize: fontSize.md,
        };
        break;
      default: {
        sizeValue = {
          width: pxToRem(48),
          height: pxToRem(48),
          fontSize: fontSize.md,
        };
      }
  }

  return {
    background: backgroundValue,
    color: common.white,
    boxShadow: 3,
    ...sizeValue
  };

});
