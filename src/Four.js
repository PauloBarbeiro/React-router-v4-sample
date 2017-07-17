import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import FourHome from './FourHome';
import Player from './Player';

class Four extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  render(){
    return(
      <Switch>
        <Route exact path='/four' component={FourHome}/>
        <Route path='/four/:number' component={Player}/>
      </Switch>
    );
  }
}

export default Four;
