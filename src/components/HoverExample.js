import React, { useState } from 'react';

function HoverExample() {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  return (
    <div 
      onMouseOver={handleMouseOver} 
      onMouseOut={handleMouseOut} 
      style={{ backgroundColor: hovered ? 'lightblue' : 'white' }}
    >
      <h2>Selamat datang!</h2>
      <p>Arahkan kursor ke sini</p>
    </div>
  );
}

export default HoverExample;
