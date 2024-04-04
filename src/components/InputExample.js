import React, { useState } from 'react';

function InputExample() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Masukkan sesuatu" 
      />
      <p>Nilai input: {inputValue}</p>
    </div>
  );
}

export default InputExample;
