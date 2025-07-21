
import React from 'react';
import { Link } from 'react-router-dom';

function TheTopNav() {
  return (
    <nav style={{ background: 'lightblue', padding: '10px' }}>
      <h3>🧢 My Store Logo or whatever</h3>
      <div>
        <Link to="/">🏠 Home</Link> |{' '}
        <Link to="/products">🧺 Products</Link> |{' '}
        <Link to="/cart">🛒 Cart</Link>
      </div>
    </nav>
  );
}

export default TheTopNav;
