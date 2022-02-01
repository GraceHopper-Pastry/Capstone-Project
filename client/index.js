import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './App'
// Added @mui/material dependencies for rendering custom theme
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider theme={theme} >
      <App />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('app')
)
