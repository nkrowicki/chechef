import React from "react";
import styles from "./Layout.module.scss";
import Sidebar from './sidebar/Sidebar';

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />

      <main className={styles.container}>
        <div className={styles.helper}>
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
