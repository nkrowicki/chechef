import React from "react";
import { Provider } from "react-redux";
import store from './store/store'

import "./styles/styles.scss";
import styles from "./ChecheffApp.module.scss";

const ChecheffApp = () => {
  return (
    <Provider store={store}>
        <div className={styles.app}>
            <h1>Nahuel Krowicki</h1>
        </div>
    </Provider>
  );
};

export default ChecheffApp;
