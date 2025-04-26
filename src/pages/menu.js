import * as React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import * as styles from "../styles/menu.module.css";
import imagemCardapio from "../images/GraosDeCafe-vertical.jpg";

const MenuPage = () => {
  return (
    <>
      <Navbar pageTitle="Cardápio" />
      <main>
        <div className={styles.cardapio}>
          <div className={styles.cardapioControle}>
            <div className={styles.itensCardapio}>
              <div className={styles.tituloCardapio}>
                <h1>
                  nossos <span>Cafés</span>
                </h1>
              </div>
              <div className={styles.item}>
                <h2>Café Expresso</h2>
                <h3>R$5,90</h3>
              </div>
              <p className={styles.itemDescricao}>Café tradicional</p>
              <div className={styles.item}>
                <h2>Café com Chocolate</h2>
                <h3>R$8,50</h3>
              </div>
              <p className={styles.itemDescricao}>Café tradicional com adição de chocolate</p>
              <div className={styles.item}>
                <h2>Café Gelado</h2>
                <h3>R$7,50</h3>
              </div>
              <p className={styles.itemDescricao}>Café tradicional com gelo e leite vaporizado</p>
              <div className={styles.item}>
                <h2>Frappe</h2>
                <h3>R$9,99</h3>
              </div>
              <p className={styles.itemDescricao}>Café tradicional com leite, açucar e gelo</p>
              <div className={styles.item}>
                <h2>Mocha</h2>
                <h3>R$9,99</h3>
              </div>
              <p className={styles.itemDescricao}>Café de chocolate com leite</p>
              <div className={styles.item}>
                <h2>Pingado</h2>
                <h3>R$5,99</h3>
              </div>
              <p className={styles.itemDescricao}>Café tradicional com leite, mais leite que café</p>
              <div className={styles.item}>
                <h2>Americano</h2>
                <h3>R$4,99</h3>
              </div>
              <p className={styles.itemDescricao}>Café com adição de água quente direta</p>
              <div className={styles.item}>
                <h2>Coado</h2>
                <h3>R$4,99</h3>
              </div>
              <p className={styles.itemDescricao}>Café feito no coador, de maneira tradicional</p>
              <div className={styles.item}>
                <h2>Água</h2>
                <h3>R$3,50</h3>
              </div>
              <p className={styles.itemDescricao}>Água mineral</p>
            </div>
          </div>
          <div className={styles.imagemCardapio}>
            <img src={imagemCardapio} alt="Grãos de café" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MenuPage;
