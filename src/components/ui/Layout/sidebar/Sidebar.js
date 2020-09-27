import React from "react";
import styles from "./Sidebar.module.scss";
import chefIcon from "../../../../images/icons/chefIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../../../actions/auth";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);
  const location = useLocation();

  const handleLogout = (e) => {
    dispatch(startLogout());
  };
  console.log(styles);

  return (
    <nav className={styles.menu} tabIndex="0">
      <div className={styles.smartphoneMenuTrigger}></div>
      <header className={styles.avatar}>
        <img src={chefIcon} />
        <h2>{name}</h2>
      </header>
      <ul>
        {/* <li tabIndex="0" className={styles.iconDashboard}>
          <span>Dashboard</span>
        </li> */}
        <Link className={styles.noDecoration} to="/app/recipes">
          <li
            tabIndex="0"
            className={` ${
              location.pathname === "/app/recipes" && styles.active
            } ${styles.iconRecipes}`}
          >
            <span>Recetas</span>
          </li>
        </Link>
        <Link className={`${styles.noDecoration}`} to="/app/orders">
          <li
            className={` ${
              location.pathname === "/app/orders" && styles.active
            } ${styles.iconOrders}`}
            tabIndex="0"
          >
            <span>Pedidos</span>
          </li>
        </Link>
        <Link className={`${styles.noDecoration}`} to="/app/accounting">
          <li
            className={` ${
              location.pathname === "/app/accounting" && styles.active
            } ${styles.iconFinance}`}
            tabIndex="0"
          >
            <span>Contabilidad</span>
          </li>
        </Link>
        <li tabIndex="0" className={styles.iconLogout} onClick={handleLogout}>
          <span className={styles.noDecoration}>Logout</span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
