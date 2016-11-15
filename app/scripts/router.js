import React from 'react';
import {Route, Router, hashHistory} from 'react-router';

import cartContainer from './components/cartContainer';
import merch from './components/merch';
const router=(
  <Router history={hashHistory}>
  <Route path="/" component={merch}/>
  </Router>
);

export default router;
