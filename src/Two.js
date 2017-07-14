import React, {Component} from 'react';
import Header from './Header';

class Two extends Component {
  render(){
    return(
      <div className="App">
        <Header />
        <p className="App-intro">
          I am page Two
        </p>

      </div>
    );
  }
}

export default Two;
