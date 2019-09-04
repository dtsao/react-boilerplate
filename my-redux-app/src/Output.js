import React from "react";
import { connect } from 'react-redux';

class Output extends React.Component {
  render() {
    return (
      <div className="form-control">{ this.props.outputText || "Hello world" }</div>
    )
  }
}

function mapState(state) {
  return {
    outputText: state.main.text
  }
}

export default connect(mapState)(Output)