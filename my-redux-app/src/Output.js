import React from "react";
import { connect } from 'react-redux';

class Output extends React.Component {
  render() {
    return (
      <div className="">
        <h2>{ this.props.outputText || "Loading..." }</h2>
      </div>
    )
  }
}

function mapState(state) {
  return {
    outputText: state.main.text
  }
}

export default connect(mapState)(Output);