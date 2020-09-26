import React from "react";
import styles from "./LoginScreen.module.scss";
import Google from "../../images/google.png";
import Logo from "../logo/Logo";
import { useDispatch } from "react-redux";
import { startGoogleLogin } from "../../actions/auth";

const LoginScreen = () => {

  const dispatch = useDispatch();

  const handleGoogleLogin = (e) => {
    e.preventDefault();

    dispatch(startGoogleLogin());

  };

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.logo}>
          <Logo />
        </div>

        <div className={styles.form}>
          <img
            className={`${styles.pointer} ${styles.image}`}
            src={Google}
            onClick={handleGoogleLogin}
          />

          {/* <input classname={styles.input} type="email" name="email" placeholder="Email" /> */}
          {/* <input classname={styles.input} type="password" name="password" placeholder="Password" /> */}

          <button onClick={handleGoogleLogin} className={`${styles.pointer} ${styles.btn}`}>
            Sign in with Google
          </button>

          <a className={styles.link} target="_blank" rel="noreferrer" href="https://www.google.com/">
            Create account (Google Site)
          </a>
          <a className={styles.by} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nahuel-krowicki-991a95106/">
            By Nahuel Krowicki
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
