import React from "react";
import { Provider } from "react-redux";
import store from './store/store'

import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
// import styles from "./ChecheffApp.module.scss";

const ChecheffApp = () => {
  return (
    <Provider store={store}>
        {/* <div className={styles.app}> */}
      <AppRouter />
    </Provider>
  );
};

export default ChecheffApp;
