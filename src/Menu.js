import React, {Component} from 'react';
import {
  Link,
} from 'react-router-dom'

class Menu extends Component {
  render(){
    return(
      <div>
        <ul id="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/one">One</Link></li>
          <li><Link to="/two">Two</Link></li>
          <li><Link to="/three">Three</Link></li>
          <li><Link to="/four">Four</Link></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
