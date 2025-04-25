import React from "react";
import { Link } from "gatsby";
import logoSimples from "../images/logo-xicara-cafe-claro.png";
import logoEscrita from "../images/CafeSemFiltro-texto.png";
import whatsapp from "../images/whatsapp.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import * as styles from "../styles/footer.module.css";

const footer = () => {
  return (
    <div className={styles.footer}>
      <Link to="/">
        <div className={styles.imagens}>
          <img
            className={styles.logoXicara}
            src={logoSimples}
            alt="Logo xicara de café"
          />
          <img
            className={styles.logoTexto}
            src={logoEscrita}
            alt="Café sem Filtro"
          />
        </div>
      </Link>
      <div className={styles.redesSociais}>
        <div className={styles.circle}>
          <img
            className={styles.itemRedeSocial}
            src={whatsapp}
            alt="Whatsapp"
          />
        </div>
        <div className={styles.circle}>
          <img
            className={styles.itemRedeSocial}
            src={facebook}
            alt="Facebook"
          />
        </div>
        <div className={styles.circle}>
          <img
            className={styles.itemRedeSocial}
            src={instagram}
            alt="Instagram"
          />
        </div>
      </div>
    </div>
  );
};

export default footer;
