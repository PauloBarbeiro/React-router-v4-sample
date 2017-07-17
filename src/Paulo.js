import React, {Component} from 'react';

class Paulo extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  render(){
    return(
      <div>
        <p className="App-intro">
            I am page Paulo Static Page.
        </p>
      </div>
    );
  }
}

export default Paulo;
