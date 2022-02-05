import React, { Fragment, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./Routes";
// Added @mui/material dependencies for rendering custom theme
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Navigation from "./shared/components/Navigation";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <Navbar /> */}
        <Navigation />
        <Routes />
      </ThemeProvider>
    </div>
  );
};

export default App;
