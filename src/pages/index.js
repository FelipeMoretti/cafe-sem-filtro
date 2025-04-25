import * as React from "react";
import { Link } from "gatsby";
import "../../gatsby-browser";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import * as styles from "../styles/index.module.css";
import logoCompleta from "../images/logo-cafe-sem-filtro-transparent.png";

const HomePage = () => {
  return (
    <>
      <Navbar pageTitle="Café sem Filtro"></Navbar>
      <main>
        <div className={styles.hero}>
          <div className={styles.conteudoHero}>
            <div className={styles.cabecalho}>
              <div className={styles.textoHero}>
                <h1>Café artesanal</h1>
                <br />
                <p>
                  Grãos selecionados, métodos únicos e uma experiência feita
                  para quem aprecia cada detalhe da xícara ao aroma.
                </p>
              </div>
              <div className={styles.logoCompleta}>
                <img src={logoCompleta} alt="Logo" />
              </div>
            </div>
            <div className={styles.botoes}>
              <button id="" className={styles.produtos}>Produtos</button>
              <button id="" className={styles.experiencia}>Experiência</button>
            </div>
          </div>
        </div>
        <div className={styles.maisVendidos}></div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
