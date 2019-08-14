import React, {Component} from 'react';
import Greetings from "./Greetings";
import './App.css';

//# Functional Component
// function App() {
//   return (
//     <Greetings />
//   )
// }

//# Class Component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "John"
    };
  }

  render() {
    return(
      <Greetings name={this.state.name} />
    )
  }
}

export default App;
