import React from "react";
import styles from "./Logo.module.scss";
import LogoImage from "./LogoImage";
import LogoText from "./LogoText";

const Logo = () => {
  return (
    <>
      <div className={styles.container}>
        <LogoImage />
        <br />
        <LogoText />
      </div>
    </>
  );
};

export default Logo;
