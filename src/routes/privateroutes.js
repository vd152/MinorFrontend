import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { getAuthToken } from '../utils/local';
// import { getToken } from '../utils/session';

const getToken = () =>{
  return false;
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) =>
      getToken() ? (
        <React.Fragment>
          <Component {...props} />
        </React.Fragment>
      ) : (
        <Redirect to='/' />
      )
    }
  />
);

export default PrivateRoute;
