import React, {Component} from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import ThreeHome from './ThreeHome';
import Paulo from './Paulo';
import Daniel from './Daniel';

class Three extends Component {
  render(){
    return(
      <Switch>
        <Route exact path='/three' component={ThreeHome}/>
        <Route path='/three/paulo' component={Paulo}/>
        <Route path='/three/daniel' component={Daniel}/>
      </Switch>
    );
  }
}

export default Three;
