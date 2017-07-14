import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import './index.css';
import App from './App';
import One from './One';
import Two from './Two';
import NotFound from './NotFound';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/one" component={One} />
      <Route path="/two" component={Two} />
      <Route component={NotFound} />
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);
registerServiceWorker();
