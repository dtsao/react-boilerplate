import React from 'react';
import Greetings from "./Greetings";
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "John Doe"
    };
  }

  render() {
    return(
      <Greetings name={this.state.name} />
    )
  }
}

export default App;
