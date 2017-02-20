import React, {Component} from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class CSSTransitionGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['hello', 'world', 'click', 'me', 'hello1', 'world1', 'click1', 'me1', 'hello2', 'world2', 'click2', 'me2']
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div className="myItem" key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));

    return (
      <div>
        <Link to='/'>Home</Link>
        <br/><br/>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup
          className="myContainer"
          transitionName="example"
          transitionAppear = {true}
          transitionAppearTimeout = {500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default CSSTransitionGroup;
