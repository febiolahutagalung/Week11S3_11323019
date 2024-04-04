import React from 'react';

class ButtonClickExample extends React.Component {
  // Fungsi untuk menangani klik tombol
  handleClick = () => {
    alert('Tombol ditekan!');
  };

  render() {
    return (
      <div>
        {/* Button */}
        <button onClick={this.handleClick}>Tekan Saya</button>
      </div>
    );
  }
}

export default ButtonClickExample;
