import React from "react";
import styles from "./LoginScreen.module.scss";
import Google from "../../images/google.png";
import Logo from "../logo/Logo";

const LoginScreen = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.logo}>
          <Logo />
        </div>

        <div className={styles.form}>
          <img
            className={`${styles.pointer}`}
            src={Google}
            onClick={handleLogin}
          />

          {/* <input type="email" name="email" placeholder="Email" /> */}
          {/* <input type="password" name="password" placeholder="Password" /> */}

          <button onClick={handleLogin} className={`${styles.pointer}`}>
            Sign in with Google
          </button>

          <a target="_blank" rel="noreferrer" href="https://www.google.com/">
            Create account (Google Site)
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
