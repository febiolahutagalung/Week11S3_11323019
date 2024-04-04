import React, { useState } from 'react';

function FormExample() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="username" 
        value={formData.username} 
        onChange={handleInputChange} 
        placeholder="Username" 
      />
      <input 
        type="password" 
        name="password" 
        value={formData.password} 
        onChange={handleInputChange} 
        placeholder="Password" 
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormExample;
