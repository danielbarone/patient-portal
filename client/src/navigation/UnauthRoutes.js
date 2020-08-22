import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Home,
  Preview,
} from '../components';

const UnauthRoutes = () => (
  <Switch>
    <Route exact path="/preview" component={Preview} />
    <Route path="/" component={Home} />
  </Switch>
);

export default UnauthRoutes;
