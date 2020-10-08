import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Header from './common/Header';
import Home from './container/home';
import CreateList from './container/createList';

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
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/lista' component={CreateList} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;