import React from 'react';
import HelloWorld from './HelloWorld';
import HelloComponent from './HelloComponent';
import HelloData from './HelloData';
import HelloHooks from './HelloHooks';
import Hello404 from './Hello404';
import NestedContainer from './NestedContainer';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div style={{padding: '30px', textAlign: 'center'}}>
      <Switch>
        <Route exact path="/" component={HelloWorld} />
        <Route path="/hello-hooks" component={HelloHooks} />
        <Route path="/hello-data/:username" render={({match}) => (
            <HelloData username={match.params.username} />
          )} />
        <Route path="/hello-component" component={HelloComponent} />
        <Route path="/nested" component={NestedContainer} />
        <Route component={Hello404} />
      </Switch>
    </div>
  );
}

export default App;
