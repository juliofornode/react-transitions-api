import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './components/app';
import CSSTransitionGroup from './components/CSSTransitionGroup';
import TransitionGroup from './components/TransitionGroup';
import ExampleTwo from './components/ExampleTwo';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} />
      <Route path='css-transition-group' component={CSSTransitionGroup} />
      <Route path='transition-group' component={TransitionGroup} />
      <Route path='example-two' component={ExampleTwo} />
  </Router>,
  document.getElementById('app')
);
