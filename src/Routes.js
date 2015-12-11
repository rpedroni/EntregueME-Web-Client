/* eslint react/self-closing-comp:0 */

import React from 'react';
import { IndexRoute, Route, Router } from 'react-router';

import {

  NavPageWrapper,

  HomePage,
  CustomerCreateListPage,
  CustomerListsPage,
  CustomerProfilePage,

  DeliveryHomePage

} from './pages';

export default (
  <Router>
    <Route path="/" component={NavPageWrapper}>
      <IndexRoute component={HomePage} />
      <Route path="new-list" component={CustomerCreateListPage} />
      <Route path="lists" component={CustomerListsPage} />
      <Route path="profile" component={CustomerProfilePage} />
    </Route>
    <Route path="/delivery" component={NavPageWrapper}>
      <IndexRoute component={DeliveryHomePage} />
    </Route>
  </Router>
);
