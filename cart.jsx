
import React from 'react';

function CartBox() {
  const fakeCartItems = [
    { name: 'Socks', price: 99 },
    { name: 'Mug', price: 149 }
  ];

  const total = fakeCartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>🛒 Cart Area (not really working)</h2>
      <ul>
        {fakeCartItems.map((x, index) => (
          <li key={index}>{x.name} - ₹{x.price}</li>
        ))}
      </ul>
      <p>Total: ₹{total}</p>
    </div>
  );
}

export default CartBox;
