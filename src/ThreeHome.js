import React, {Component} from 'react';
import {
  Link,
} from 'react-router-dom'

class ThreeHome extends Component {
  render(){
    return(
      <div>
        <p className="App-intro">
            I am page ThreeHome. I show some static links.
        </p>
        <ul>
          <li key='1'>
            <Link to={`/three/paulo`}>Paulo</Link>
          </li>
          <li key='2'>
            <Link to={`/three/daniel`}>Daniel</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default ThreeHome;
