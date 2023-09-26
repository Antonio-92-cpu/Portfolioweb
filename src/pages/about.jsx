import React from 'react';
import '../components/reset.css';
import Layout from '../layouts/Layout';
import { Image } from 'astro:assets';
import fondo from '../fondo.jpg';

const AboutPage = () => {
  return (
    <Layout title="Sobre mí">
      <main>
        <header>
          <div className="container">
            <nav>
              <ul>
                <li><a href="/index.astro">OYU</a></li>
                <li><a href="/portfolio.astro">PORTFOLIO</a></li>
                <li><a href="/galery.astro">GALERIA</a></li>
                <li><a href="/about.astro">SOBRE MI</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <div>
          <img src={fondo} alt="Un pájaro." />
        </div>
        <div>
          <p>
            ¡Hola, me llamo Antonio Oyuela!
            Soy Técnico en Sistemas Microinformáticos y Redes, Diseño Gráfico y Diseño de Moda por la Escuela de Arte de Cádiz (España). Me especializo en la ilustración digital y tengo preferencia por el diseño de personajes e ilustrar/diseñar cartelería, portadas editoriales, etc…
            Siempre he tenido gran facilidad para recrear otros estilos, así que mi mayor preocupación, desde que me gradué en Diseño Gráfico, ha sido la de encontrar uno propio. Entre mis principales influencias se encuentran Disney y artistas como Tetsuya Nomura y Yoshitaka Amano; mi mayor inspiración han sido los videojuegos.
            He trabajado como colorista de fondos de la serie animada Gerónimo Stilton, para Verjim Animation Studio, me he iniciado en el modelaje 3D con la guía de LeonStudio VFX y empecé a formarme en Concept Art gracias a profesionales como Nacho Yagüe, J.Alexander Guillen y Guillem H. Pongiluppi.
            Me apasiona crear, aprender y perfeccionar lo aprendido.
          </p>
        </div>
        <h1>Habilidades</h1>
        <div className="skills">
          <div className="circular-progress html5"></div>
          <div className="circular-progress css3"></div>
          <div className="circular-progress jscript"></div>
        </div>
        <footer></footer>
      </main>
      <style>
      </style>
    </Layout>
  );
}

export default AboutPage;