import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from "./old-components/Navbar";
import Routes from "./Routes";
// Added @mui/material dependencies for rendering custom theme
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme} >
          <Navbar />
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
