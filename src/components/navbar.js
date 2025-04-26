import React from "react";
import { Link } from "gatsby";
import logoSimples from "../images/logo-xicara-cafe-claro.png";
import * as styles from "../styles/navbar.module.css";

const navbar = ({ pageTitle }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("sobre");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWorkshop = () => {
    const workshopSection = document.getElementById("workshop");
    if (workshopSection) {
      workshopSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <h1>Cardápio</h1>
        </Link>
      </div>
      <div className={styles.itemNavbar}>
        <button onClick={scrollToWorkshop}>
          <h1>Workshops</h1>
        </button>
      </div>
      <div className={styles.itemNavbarSobre}>
        <button onClick={scrollToAbout}>
          <h1>Sobre</h1>
        </button>
      </div>
    </div>
  );
};

export default navbar;
