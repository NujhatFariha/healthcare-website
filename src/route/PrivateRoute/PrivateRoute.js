import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../Hooks/useAuth.js";

const PrivateRoute = ({ children, ...rest }) => {
  const { contexts } = useAuth();
  if (contexts.loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        contexts?.user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;