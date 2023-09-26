import React from 'react';
import '../components/reset.css';
import Layout from '../layouts/Layout';
import Footer from '../components/Footer';
import fondo from '../fondo.jpg';

const MyPage = () => {
  return (
	<>
      <meta charSet="UTF-8" />
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
        <marquee><h1>EL BACKEND ESTÁ OCULTO</h1></marquee>
        <div className="fondo">
          <img src={fondo} alt="Un pájaro." width="1180" />
        </div>
        <Footer />
    </>
  );

export default MyPage;