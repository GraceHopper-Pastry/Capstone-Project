import { red, pink } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// breakpoints
const xl = 1920;
const lg = 1280;
const md = 960;
const sm = 600;
const xs = 0;

// background
const background = '#f5f5f5';

// spacing
const spacing = 8;

// border
const borderWidth = 2;
const borderColor = 'rgba(0,0,0,0.2)';

// A custom theme for this app
const theme = createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#556cd6',
      light: '#5c67a3',
      dark: '#2e355b',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff66b3',
      light: '#ff80bf',
      dark: '#cc0066',
      contrastText: '#000',
    },
    common: {
      black: 'rgb(36, 40, 44)',
      grey: '#343a40',
      white: '#ffffff',
    },

    openTitle: '#3f4771',
    protectedTitle: pink['400'],
    error: {
      main: red.A400,
    },
    background: {
      default: background,
    },
    spacing,
  },
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
    values: {
      xl,
      lg,
      md,
      sm,
      xs,
    },
  },
  border: {
    borderColor: borderColor,
    borderWidth: borderWidth,
  },
  overrides: {
    MuiExpansionPanel: {
      root: {
        position: 'static',
      },
    },
    MuiTableCell: {
      root: {
        paddingLeft: spacing * 2,
        paddingRight: spacing * 2,
        borderBottom: `${borderWidth}px solid ${borderColor}`,
        [`@media (max-width:  ${sm}px)`]: {
          paddingLeft: spacing,
          paddingRight: spacing,
        },
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: borderColor,
        height: borderWidth,
      },
    },
    MuiPrivateNotchedOutline: {
      root: {
        borderWidth: borderWidth,
      },
    },
    MuiListItem: {
      divider: {
        borderBottom: `${borderWidth}px solid ${borderColor}`,
      },
    },
    // MuiDialog: {
    //   // paper: {
    //   //   width: '100%',
    //   //   maxWidth: 430,
    //   //   marginLeft: spacing,
    //   //   marginRight: spacing,
    //   // },
    // },
    MuiDialogContent: {
      root: {
        padding: 0,
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: '#343a40',
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        [`@media (max-width:  ${sm}px)`]: {
          paddingLeft: spacing,
          paddingRight: spacing,
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
