import * as React from "react";
import { Link } from "gatsby";
import "../../gatsby-browser";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import * as styles from "../styles/index.module.css";
import logoCompleta from "../images/logo-cafe-sem-filtro-transparent.png";
import cafeExpresso from "../images/cafe-expresso.png";
import cafeGelado from "../images/cafe-gelado.jpg";
import cafeChocolate from "../images/cafe-com-chocolate.jpg";
import frappe from "../images/frappe.jpg";
import imagemInformacoes from "../images/lampada-com-folhas.jpg";
import imagemWorkshop from "../images/fazendo-cafe.jpg";

const HomePage = () => {
  
  const scrollToWorkshop = () => {
    const workshopSection = document.getElementById("workshop");
    if (workshopSection) {
      workshopSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar pageTitle="Café sem Filtro" />
      <main>
        <section className={styles.hero}>
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
              <Link to="/menu">
                <button id="" className={styles.produtos}>
                  Produtos
                </button>
              </Link>
              <button onClick={scrollToWorkshop} className={styles.experiencia}>
                Experiência
              </button>
            </div>
          </div>
        </section>
        <section className={styles.maisVendidos}>
          <div className={styles.tituloMaisVendidos}>
            <h1>Mais Vendidos</h1>
          </div>
          <div className={styles.cards}>
            <div className={styles.item}>
              <div className={styles.card}>
                <img src={cafeExpresso} alt="Café expresso" />
                <p>Café Expresso</p>
              </div>
              <button id="" className={styles.botaoComprar}>
                Comprar
              </button>
            </div>
            <div className={styles.item}>
              <div className={styles.card}>
                <img src={cafeGelado} alt="Café gelado" />
                <p>Café Gelado</p>
              </div>
              <button id="" className={styles.botaoComprar}>
                Comprar
              </button>
            </div>
            <div className={styles.item}>
              <div className={styles.card}>
                <img src={cafeChocolate} alt="Café com chocolate" />
                <p>Café com Chocolate</p>
              </div>
              <button id="" className={styles.botaoComprar}>
                Comprar
              </button>
            </div>
            <div className={styles.item}>
              <div className={styles.card}>
                <img src={frappe} alt="Frappe" />
                <p>Frappe</p>
              </div>
              <button id="" className={styles.botaoComprar}>
                Comprar
              </button>
            </div>
          </div>
        </section>
        <section className={styles.informacoes}>
          <img src={imagemInformacoes} alt="Lâmpada com folhas" />
          <div className={styles.textoInformacoes}>
            <p>
              Localização: Rua dos Grãos de Café - CEP 12345-678 <br />
              <br />
              Horário de funcionamento: 06:00 - 19:00 de Seg a Sáb. <br />
              <br />
              Telefone: (11) 99140-7988 - Whatsapp
            </p>
          </div>
        </section>
        <section id="sobre" className={styles.sobre}>
          <h1>Sobre Nós</h1>
          <p>
            Na nossa cafeteria, cada xícara conta uma história. Usamos grãos
            selecionados de cultivo sustentável e comércio justo, preparados em
            métodos especiais como prensa francesa, siphon e cold brew para
            revelar nuances únicas de sabor. Quer ir além de provar? Participe
            dos nossos workshops de barista e degustações interativas, aprenda a
            arte do café e crie sua própria bebida. Venha viver uma experiência
            que respeita a origem do grão e celebra novos aromas em cada
            preparo.
          </p>
        </section>
        <section id="workshop" className={styles.workshop}>
          <div className={styles.textoWorkshop}>
            <p>
              Descubra o universo do café nos nossos workshops de barista. Em
              encontros práticos e descontraídos, você aprende a escolher grãos,
              dominar métodos como espresso, prensa francesa e cold brew, e a
              texturizar o leite para latte art de respeito. Saia preparado para
              criar bebidas incríveis em casa, entendendo cada etapa da moagem
              ao serviço e elevando sua rotina com cafés que contam história em
              cada gole.
            </p>
          </div>
          <img src={imagemWorkshop} alt="Homem fazendo café" />
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default HomePage;
