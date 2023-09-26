import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Este es el footer de mi aplicación</p>
      <div className="social-media">
      <a href="https://www.facebook.com/tu-pagina" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="https://www.twitter.com/tu-pagina" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.instagram.com/tu-pagina" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
    </footer>
  );
}

export default Footer;