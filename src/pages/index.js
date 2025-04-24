import * as React from 'react';
import { Link } from 'gatsby';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import "../../gatsby-browser"

const HomePage = () => {
  return (
    <>
    <Navbar pageTitle="Café sem Filtro"></Navbar>

    <Footer></Footer>
    </>
  )
}

export default HomePage;