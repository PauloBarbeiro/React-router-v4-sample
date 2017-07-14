import React, {Component} from 'react';
import Header from './Header';

class One extends Component {
  render(){
    return(
      <div className="App">
        <Header />
        <p className="App-intro">
          I am page One
        </p>

      </div>
    );
  }
}

export default One;
