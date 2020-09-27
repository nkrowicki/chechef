import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { firebase } from "../firebase/firebase-config";
import PublicRoute from "./PublicRoute";
import AuthRouter from "./AuthRouter";
import PrivateRoute from "./PrivateRoute";
// import ChechefScreen from "../components/chechef/ChechefScreen";
import ChechefRouter from './ChechefRouter';

import Spinner from "../components/spinner/Spinner";

import styles from "./AppRouter.module.scss";
import { login } from "../actions/auth";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        // Load user data
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

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
            path="/app"
            component={ChechefRouter}
            isAuthenticated={isLoggedIn}
          />
          <Redirect to={"/auth/login"} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
