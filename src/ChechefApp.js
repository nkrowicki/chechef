import React from "react";
import { Provider } from "react-redux";
import store from './store/store'

import "./ChecheffApp.module.scss";
import AppRouter from "./routers/AppRouter";
// import styles from "./ChechefApp.module.scss";

const ChechefApp = () => {
  return (
    <Provider store={store}>
        {/* <div className={styles.app}> */}
      <AppRouter />
    </Provider>
  );
};

export default ChechefApp;
