import React, { Component } from 'react';


import logo from './logo.svg';
import './App.css';
import Menu from './Menu';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React Router</h2>
            <Menu/>
      </div>
    );
  }
}

export default Header;
