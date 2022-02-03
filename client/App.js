import React, { Fragment, Suspense, lazy } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from "./logged_out/components/navigation/NavBar";
import Routes from "./Routes";
// Added @mui/material dependencies for rendering custom theme
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'


const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme} >
        <Navbar />
        <Routes />
      </ThemeProvider>
    </div>
  );
};

export default App;
