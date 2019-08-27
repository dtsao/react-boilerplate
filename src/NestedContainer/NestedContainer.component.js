import React from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import {Route, Switch, Link} from 'react-router-dom'

export default ({match}) => (
  <div>
    <nav>
      <ul style={{background: '#eee', padding: '20px'}}>
        <li><Link to="/nested/a">Go To Component A</Link></li>
        <li><Link to="/nested/b">Go To Component B</Link></li>
      </ul>
    </nav>
    <Switch>
      <Route path={`${match.path}/a`} component={ComponentA} />
      <Route path={`${match.path}/b`} component={ComponentB} />
    </Switch>
  </div>
)