import React, { Component, Fragment } from 'react';

class HelloComponent extends Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick() {
    this.setState({show: !this.state.show});
  }
  
  render() {
    const { show } = this.state;
    return (
      <Fragment>
        <button onClick={this.toggleClick}>{show ? 'Hide' : 'Show'}</button>
        {show && <h1>HELLO COMPONENT</h1>}
      </Fragment>

    )
  }
}

export default HelloComponent;