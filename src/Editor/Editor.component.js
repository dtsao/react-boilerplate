import React, {Fragment} from 'react';
import { 
  Markdown, 
  // VerticalHandler, 
  // Preview 
} from './modules';
// import Markdown from './modules/Markdown'
//import './styles.scss';

export default () => (
  <Fragment>
    <p class="editor__test">SASS TEST</p>
    <Markdown />
    {/* <VerticalHandler />
    <Preview /> */}
  </Fragment>
)