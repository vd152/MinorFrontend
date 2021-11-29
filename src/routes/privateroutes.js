import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getAuthToken } from '../utils/localStorage';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) =>
      getAuthToken() ? (
        <React.Fragment>
          <Component {...props} />
        </React.Fragment>
      ) : (
        <Redirect to='/login' />
      )
    }
  />
);

export default PrivateRoute;
