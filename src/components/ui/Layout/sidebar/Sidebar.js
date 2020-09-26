import React from "react";
import styles from "./Sidebar.module.scss";
import chefIcon from "../../../../images/icons/chefIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../../../actions/auth";


const Sidebar = () => {

  const dispatch = useDispatch();
  const {name} = useSelector(state => state.auth);

  const handleLogout = e => {
    dispatch(startLogout());
  }

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
        <li tabIndex="0" className={styles.iconRecipes}>
          <span>Recetas</span>
        </li>
        <li tabIndex="0" className={styles.iconOrders}>
          <span>Pedidos</span>
        </li>
        <li tabIndex="0" className={styles.iconFinance}>
          <span>Contabilidad</span>
        </li>
        <li 
          tabIndex="0" 
          className={styles.iconLogout}
          onClick={handleLogout}>
          <span>Logout</span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
