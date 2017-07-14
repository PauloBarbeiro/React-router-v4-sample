import React, {Component} from 'react';
import Header from './Header';

class NotFound extends Component {
  render(){
    return(
      <div className="App">
        <Header />
        <p className="App-intro">
          <b>404</b> NOT Found
        </p>

      </div>
    );
  }
}

export default NotFound;
