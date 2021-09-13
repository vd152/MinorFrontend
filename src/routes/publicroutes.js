import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) =>
        <React.Fragment>
          <Component {...props} />
        </React.Fragment>
      
    }
  />
);

export default PublicRoute;
