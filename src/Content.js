import React, {Component} from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'

import Home from './Home';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import NotFound from './NotFound';


class Content extends Component {
  render(){
    return(
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/one' component={One} />
          <Route path='/two' component={Two} />
          <Route path='/three' component={Three} />
          <Route path='/four' component={Four} />
          <Route component={NotFound} />

        </Switch>
      </main>
    );
  }
}

export default Content;
