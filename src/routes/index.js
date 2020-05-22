import React from 'react';
import { Router, Switch } from 'react-router-dom';

import Route from './Route';
import history from '../services/history';

import Character from '../pages/Character';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';

import SignIn from '../pages/SignIn';

export default () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={SignIn} exact />
      <Route path="/dashboard" component={Dashboard} exact isPrivate />
      <Route path="/character/:id" component={Character} exact isPrivate />

      <Route path="/" component={NotFound} />
    </Switch>
  </Router>
);
