import React from 'react';
import '../components/reset.css';
import Layout from '../layouts/Layout';
import Footer from '../components/Footer';
import fondo from '../fondo.jpg';

const MyPage = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <main>
        <header>
          <div className="container">
            <nav>
              <ul>
                <li><a href="./index">OYU</a></li>
                <li><a href="./portfolio">PORTFOLIO</a></li>
                <li><a href="./galery">GALERIA</a></li>
                <li><a href="./about">SOBRE MI</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <marquee><h1>ESTA PÁGINA ESTA EN COSNTRUCCIÓN FECHA DE FINALIZACIÓN MARTES 26</h1></marquee>
        <div className="fondo">
          <img src={fondo} alt="Un pájaro." width="1180" />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default MyPage;