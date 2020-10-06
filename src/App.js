import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import Header from './common/Header';
import Home from './container/home';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#009688',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <Home />
    </MuiThemeProvider>
  );
}

export default App;
