import React, {Component} from 'react';
import {Link} from 'react-router';

class TransitionGroup extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <p>ReactTransitionGroup is the low level.</p>
      </div>
    );
  }
}

export default TransitionGroup;
