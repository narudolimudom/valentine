

import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';


const App: React.FC = () => {
  const [cardTop, setCardTop] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [fade, setFade] = useState<'' | 'fade-out' | 'fade-in'>('');

  const handleMouseOver = () => {
    setCardTop(-90);
  };

  const handleMouseLeave = () => {
    setCardTop(0);
  };

  const handleClick = () => {
    setFade('fade-out');
    setTimeout(() => {
      setShowMenu(true);
      setFade('fade-in');
      setTimeout(() => setFade(''), 600);
    }, 600);
  };

  return (
    <>
      {!showMenu ? (
        <div
          className={`container${fade ? ' ' + fade : ''}`}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        >
          <div className="valentines">
            <div className="envelope"></div>
            <div className="front"></div>
            <div className="card" style={{ top: cardTop }}>
              <div className="text">Happy<br />Valentine's<br />Day!</div>
              <div className="heart"></div>
            </div>
            <div className="hearts">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
              <div className="four"></div>
              <div className="five"></div>
            </div>
          </div>
          <div className="shadow"></div>
        </div>
      ) : (
        <div className={`menu-wrapper${fade ? ' ' + fade : ''}`}>
          <Menu />
        </div>
      )}
    </>
  );
};

export default App;
