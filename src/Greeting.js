import React, {Component} from "react";

class Greeting extends Component {
  render() {
    return <h1>Hello {this.props.name ? this.props.name : "World"}</h1>
  }
}

export default Greeting;
