import React from 'react';
import './App.css';
import InputExample from './components/InputExample';
import FormExample from './components/FormExample';
import HoverExample from './components/HoverExample';
import ButtonClickExample from './components/ButtonClickExample';
import KeyPressExample from './components/KeyPressExample'; // Perbaiki impor dengan menambahkan KeyPressExample

function App() {
  return (
    <div className="App">
      <h1>Contoh Event Handling</h1>
      <ButtonClickExample />
      <hr />
      <InputExample />
      <hr />
      <FormExample />
      <hr />
      <HoverExample />
      <hr />
      <KeyPressExample /> {/* Tambahkan komponen KeyPressExample di sini */}
    </div>
  );
}

export default App;
