import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
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
      <AppBar position="static" color="primary">
        <div className="header">
          <h1 className="title">Lista de Compras</h1>
        </div>
      </AppBar>
      <div>
        <h1>Hello World!</h1>
      </div>  
    </MuiThemeProvider>
  );
}

export default App;
