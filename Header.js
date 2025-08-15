import React from 'react';

function Header({ title }) {
  return (
    <header className="App-header">
      <h1>{title}</h1>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', padding: 0 }}>
          <li style={{ margin: '0 10px' }}><a href="/" style={{ color: 'white' }}>Home</a></li>
          <li style={{ margin: '0 10px' }}><a href="/about" style={{ color: 'white' }}>About</a></li>
          <li style={{ margin: '0 10px' }}><a href="/contact" style={{ color: 'white' }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;