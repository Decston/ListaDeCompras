import React from 'react';
import AppBar from '@material-ui/core/AppBar';

const Header = (props) => (
    <AppBar position="static" color="primary">
        <div className="header">
          <h1 className="title">Lista de Compras</h1>
        </div>
    </AppBar>
);

export default Header;