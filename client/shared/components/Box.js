import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import linearGradient from '../functions/linearGradient';

export default styled(Box)(({ theme }) => {
  const { palette, shadows, borders } = theme;
  const { gradients, grey, secondary } = palette;
  const { radius } = borders;

  const backgroundValue = palette.background.default
  const color = "#FFF"

  const borderRadiusValue = radius

  return {
    opacity: [0.9, 0.8, 0.7],
    color: color,
    background: backgroundValue,
    borderRadius: borderRadiusValue,
    boxShadow: 3


  }

})
