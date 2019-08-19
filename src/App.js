import React from 'react';
import HelloWorld from './HelloWorld';
import HelloComponent from './HelloComponent';
import HelloData from './HelloData';
import HelloHooks from './HelloHooks';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div style={{padding: '30px', textAlign: 'center'}}>
      <Route path="/hello-hooks" component={HelloHooks} />
      <Route path="/hello-data" component={HelloData} />
      <Route path="/hello-component" component={HelloComponent} />
      <Route exact path="/" component={HelloWorld} />
    </div>
  );
}

export default App;
