import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import AuthRouter from "./AuthRouter";
import PrivateRoute from "./PrivateRoute";
import ChecheffScreen from "../components/checheff/ChecheffScreen";
import { useDispatch } from "react-redux";
import Spinner from "../components/spinner/Spinner";

import styles from "./AppRouter.module.scss";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (checking) {
    return (
      <div className={styles.center}>
        <Spinner />
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            exact
            path="/"
            component={ChecheffScreen}
            isAuthenticated={isLoggedIn}
          />
          <Redirect to={"/auth/login"} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
