import React from 'react';


const Menu: React.FC = () => {
  return (
    <div className="menu-page flower-bg">
      <div className="card-message">
        <h1>💐 Happy Valentine's Day! 💐</h1>
        <p>Wishing you a day filled with love, joy, and lots of beautiful moments.<br/>Here is a bouquet for you!!</p>
        <div className="bouquet-img-wrap">
        <img
          src={require('../assets/v1058-19.jpg')}
          alt="Bouquet of flowers"
          className="bouquet-img"
        />
        </div>
        <div className="flowers-row">
          {Array.from({ length: 12 }).map((_, i) => (
            <span className="flower" key={i} role="img" aria-label="flower">🌸</span>
          ))}
        </div>
        <div className="flowers-row">
          {Array.from({ length: 10 }).map((_, i) => (
            <span className="flower" key={i} role="img" aria-label="flower">🌹</span>
          ))}
        </div>
        <div className="flowers-row">
          {Array.from({ length: 8 }).map((_, i) => (
            <span className="flower" key={i} role="img" aria-label="flower">🌷</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
