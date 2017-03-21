import React from 'react';
import { Router, Route } from 'react-router';
import Readme from './docs/readme.page';
import App from './App';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/readme" component={Readme} />
  </Router>
);

export default Routes;
