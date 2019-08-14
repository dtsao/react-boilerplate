import React, {Component} from "react";

class Greetings extends Component {
  render() {
    return(
      <h1>Hello {this.props.name ? this.props.name : "World"}</h1>
    )
  }
}

export default Greetings;
