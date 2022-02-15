import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// breakpoints
const xl = 1920;
const lg = 1280;
const md = 960;
const sm = 600;
const xs = 0;

const customPalette = {
  matisse: "#16738D",
  pictonBlue: "#24C0EB",
  monteCarlo: "#87D3CF",
  persimmon: "#FF7350",
  coral: "#FF8259",
  koromiko: "#FEB865",
  concrete: "#F3F3F3",
  dawnPink: "#F1E4DF",
  bridesmaid: "#FDEAE4",
  cadetBlue: "#B2B7CA",
  outerSpace: "#343A40",
  black: "#24282C",
  white: "#FFFF",
};

// background
const background = customPalette.concrete;

// spacing
const spacing = 8;

// border
const borderWidth = 2;
const borderColor = customPalette.black;
const borderRadius = "50%";

// A custom theme for this app
const theme = createTheme({
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "h6",
        subtitle2: "h6",
        body1: "p",
        body2: "p",
        inherit: "p",
      },
    },
  },
  typography: {
    useNextVariants: true,

  },
  palette: {
    primary: {
      main: customPalette.coral,
      light: customPalette.koromiko,
      dark: customPalette.persimmon,
      contrastText: customPalette.black,
    },
    secondary: {
      main: customPalette.pictonBlue,
      light: customPalette.monteCarlo,
      dark: customPalette.matisse,
      contrastText: customPalette.concrete,
    },
    common: {
      black: customPalette.black,
      grey: customPalette.outerSpace,
      slate: customPalette.cadetBlue,
      nude: customPalette.dawnPink,
      dkNude: customPalette.bridesmaid,
      white: customPalette.concrete,
    },
    transparent: {
      main: "transparent",
    },
    grey: {
      100: "#f8f9fa",
      200: "#f0f2f5",
      300: "#dee2e6",
      400: "#ced4da",
      500: "#adb5bd",
      600: "#6c757d",
      700: "#495057",
      800: "#343a40",
      900: "#212529",
    },
    success: {
      main: "#4CAF50",
      light: "#81C784",
      dark: "#338E3C",
      contrastText: customPalette.black,
    },
    warning: {
      main: "#FFEB3B",
      light: "rgba(255,239,98,0.84)",
      dark: "#C7B713",
      contrastText: customPalette.black,
    },
    error: {
      main: "#F44336",
      light: "#E57373",
      dark: "#D32F2F",
      contrastText: customPalette.concrete,
    },
    info: {
      main: "#3F51B5",
      light: "#6573C3",
      dark: "#2C387E",
      contrastText: customPalette.concrete,
    },
    gradients: {
      primary: {
        main: customPalette.coral,
        state: customPalette.persimmon,
      },

      secondary: {
        main: "#747b8a",
        state: "#495361",
      },

      info: {
        main: "#49a3f1",
        state: "#1A73E8",
      },

      success: {
        main: "#66BB6A",
        state: "#43A047",
      },

      warning: {
        main: "#FFA726",
        state: "#FB8C00",
      },

      error: {
        main: "#EF5350",
        state: "#E53935",
      },

      light: {
        main: "#EBEFF4",
        state: "#CED4DA",
      },

      dark: {
        main: "#42424a",
        state: "#191919",
      },
    },

    tonalOffset: 0.2,
    openTitle: customPalette.pictonBlue,
    protectedTitle: customPalette.coral,
    background: {
      default: background,
    },
    spacing,
  },
  breakpoints: {
    // responsive breakpoints, such as `Grid` and `Hidden`. You can also use the
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
  borders: {
    borderColor: borderColor,
    borderWidth: borderWidth,
    radius: borderRadius,
  },
  // shadows: {
  //   boxShadow: 0,
  //   boxShadow: 1,
  //   boxShadow: 2,
  //   boxShadow: 3,
  // },
  props: {
    MuiAppBar: {
      color: "transparent",
      backgroundColor: customPalette.bridesmaid,
    },
    MuiTooltip: {
      arrow: true,
    },
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: "small",
    },
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: customPalette.coral,
        color: customPalette.concrete,
      },
    },
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        "&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
          transform: "translateX(16px)",
          color: "#fff",
          "& + $track": {
            opacity: 1,
            border: "none",
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: "1px solid #bdbdbd",
        backgroundColor: "#fafafa",
        opacity: 1,
        transition:
          "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      },
    },
    MuiExpansionPanel: {
      root: {
        position: "static",
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
        backgroundColor: customPalette.cadetBlue,
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
