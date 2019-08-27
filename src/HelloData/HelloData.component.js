import React, { Component, Fragment } from 'react';
import TodoTile from './modules/TodoTile.component';
import {withRouter} from 'react-router-dom';

class HelloData extends Component {
  state = {
    show: true,
    apiData: []
  }

  componentDidMount() {
    const { username } = this.props;
    const lengthOfTodos = username.length;
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        this.setState({apiData: json.splice(0,lengthOfTodos)})
      })
  }

  toggleClick = () => {
    this.setState({show: !this.state.show});
  }
  
  render() {
    const { username } = this.props;
    const { show, apiData } = this.state;
    const TODO_TILES = apiData.length 
      ? (<ul>{apiData.map(data => <TodoTile key={data.id} {...data} />)}</ul>)
      : <p>...loading</p>;
    return (
      <Fragment>
        <button onClick={this.toggleClick}>{show ? 'Hide' : 'Show'}</button>
        {show && <h1>HELLO { username.toUpperCase() }</h1>}
        {TODO_TILES}
      </Fragment>
    )
  }
}

export default withRouter(HelloData);