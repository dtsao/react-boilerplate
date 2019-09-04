import React from "react";
import Input from "./Input";
import Output from "./Output";
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>App Title</h1>
        <Input />
        <br />
        <Output />
      </div>
    )
  }
}