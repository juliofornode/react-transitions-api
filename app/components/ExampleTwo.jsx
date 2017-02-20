import React, {Component} from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ExampleTwo extends Component {
  render() {
    return (
       <div>
          <ReactCSSTransitionGroup transitionName = "example2"
             transitionAppear = {true} transitionAppearTimeout = {500}
             transitionEnter = {false} transitionLeave = {false}>

             <h1>My Element...</h1>
          </ReactCSSTransitionGroup>
       </div>
    );
  }
}


export default ExampleTwo;
