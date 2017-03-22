import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import Readme from './docs/readme.page';
import MenuPage from './docs/menu.page';
import ButtonPage from './docs/button.page';
import GridPage from './docs/grid.page';

export default (
  <Route path={process.env.PUBLIC_URL + '/'} component={App}>
    <IndexRoute component={Readme}/>
    <Route path="/readme" component={Readme}/>
    <Route path="/menu" component={MenuPage}/>
    <Route path="/button" component={ButtonPage}/>
    <Route path="/grid" component={GridPage}/>
  </Route>
);
