import React from 'react';

export default ({userId, title, completed}) => (
  <li style={{border: '1px solid grey'}}>
    <p>userID: {userId}</p>
    <p>title: {title}</p>
    <p>completed: {completed ? 'complete' : 'pending'}</p>
  </li>
)