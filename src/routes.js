import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import { isAuthenticated } from './services/auth';
import Main from './screens/Main';
import Game from './screens/Game';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <PrivateRoute path="/game" exact component={Game} />
        <Route path="*" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
