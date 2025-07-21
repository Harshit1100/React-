
import React from 'react';
import { Link } from 'react-router-dom';

function AllTheProducts() {
  const stuffILike = [
    { id: 1, name: 'Socks', price: '₹99' },
    { id: 2, name: 'Hat', price: '₹199' },
    { id: 3, name: 'Coffee Mug', price: '₹149' },
  ];

  return (
    <div>
      <h2>📦 All the things I'm selling (maybe)</h2>
      <ul>
        {stuffILike.map((thing) => (
          <li key={thing.id}>
            <Link to={`/products/${thing.id}`}>
              {thing.name} - {thing.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllTheProducts;
