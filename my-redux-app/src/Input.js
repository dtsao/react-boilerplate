import React from "react";
import { connect } from 'react-redux';
import {setText} from './actions';

class Input extends React.Component {
  
  render() {

    return(
      <input className="form-control" type="text" placeholder="Type something great..." onChange={this.props.handleTextInput} />
    )
  }
}

function mapDispatch(dispatch) {
  return {
    handleTextInput: ({target}) => {
      return dispatch(setText(target.value))
    }
    
  }
}

export default connect(null, mapDispatch)(Input);