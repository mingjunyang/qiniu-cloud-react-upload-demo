import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {ReactQiniuExample} from './components/demo.jsx';

render(
  <Router history={browserHistory}>
  <Route path="/" component={ReactQiniuExample}></Route>
  <Route path="*" component={ReactQiniuExample}/>
</Router>, document.getElementById('react-app'));
