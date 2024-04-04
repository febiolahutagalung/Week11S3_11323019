// KeyPressExample.js
import React, { useState } from 'react';

function KeyPressExample() {
  const [keyPressed, setKeyPressed] = useState('');

  const handleKeyDown = (event) => {
    setKeyPressed(event.key);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Tekan tombol di sini..." 
        onKeyDown={handleKeyDown} 
      />
      <p>Tombol terakhir yang ditekan: {keyPressed}</p>
    </div>
  );
}

export default KeyPressExample;
