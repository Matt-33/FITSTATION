import React from 'react';
import '../styles/pages/home.scss';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenue chez FITSTATION</h1>
          <p>Boostez vos performances avec nos programmes sur mesure, produits et vêtements spécialisés.</p>
          <button className="cta-button">Commencer</button>
        </div>
      </section>
    </div>
  );
};

export default Home;