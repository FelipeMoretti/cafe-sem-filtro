import React from "react";
import { Link } from "gatsby";
import logoSimples from "../images/logo-xicara-cafe-claro.png";
import * as styles from "../styles/navbar.module.css";

const navbar = ({ pageTitle }) => {
  return (
    <div className={styles.navbar}>
      <title>{pageTitle}</title>
      <Link to="/">
        <img
          className={styles.logo}
          src={logoSimples}
          alt="Logo xicara de café"
        />
      </Link>
      <div className={styles.itemNavbar}>
        <Link to="/">
          <h1>Home</h1>
        </Link>
      </div>
      <div className={styles.itemNavbar}>
        <Link to="/menu">
          <h1>Cardapio</h1>
        </Link>
      </div>
      <div className={styles.itemNavbar}>
        <h1>Workshops</h1>
      </div>
      <div className={styles.itemNavbarSobre}>
        <h1>Sobre</h1>
      </div>
    </div>
  );
};

export default navbar;
