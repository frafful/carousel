
import React from 'react';
import { Router, Link, NavLink, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import Help from '../components/Help.js';
import Login from '../components/Login.js';
import NotFound from '../components/NotFound.js';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import CreateNotebook from '../components/CreateNotebookPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history} >
    <div>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/notebook/create" component={CreateNotebook} />
        <Route component={NotFound} />
      </Switch>  
    </div>
  </Router>
);

export default AppRouter;