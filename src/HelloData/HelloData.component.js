import React, { Component, Fragment } from 'react';
import TodoTile from './modules/TodoTile.component';

class HelloData extends Component {
  state = {
    show: false,
    apiData: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        this.setState({apiData: json.splice(0,10)})
      })
  }

  toggleClick = () => {
    this.setState({show: !this.state.show});
  }
  
  render() {
    const { show, apiData } = this.state;
    const TODO_TILES = apiData.length 
      ? (<ul>{apiData.map(data => <TodoTile key={data.id} {...data} />)}</ul>)
      : <p>...loading</p>;
    return (
      <Fragment>
        <button onClick={this.toggleClick}>{show ? 'Hide' : 'Show'}</button>
        {show && <h1>HELLO DATA</h1>}
        {TODO_TILES}
      </Fragment>
    )
  }
}

export default HelloData;