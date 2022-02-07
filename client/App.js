import React, { Fragment, Suspense, lazy } from "react";
import Routes from "./Routes";
// Added @mui/material dependencies for rendering custom theme
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Navigation from "./components/Navigation";
import ImageUpload from "./components/ImageUpload";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <ImageUpload /> */}
        <Navigation />
        <Routes />
      </ThemeProvider>
    </div>
  );
};

export default App;
