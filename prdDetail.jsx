
import React from 'react';
import { useParams } from 'react-router-dom';

function OneProductDetails() {
  const grabber = useParams();
  const thingId = grabber.id;

  const allThings = {
    1: { name: 'Socks', price: '₹30', desc: 'Warm and comfy' },
    2: { name: 'Hat', price: '₹40', desc: 'Looks cool maybe' },
    3: { name: 'Coffee Mug', price: '₹19', desc: 'Holds liquid yay' },
  };

  const selectedThing = allThings[thingId];

  if (!selectedThing) {
    return <p>Oops! No product found with that ID 🙈</p>;
  }

  return (
    <div>
      <h2>{selectedThing.name}</h2>
      <p>{selectedThing.desc}</p>
      <strong>{selectedThing.price}</strong>
    </div>
  );
}

export default OneProductDetails;
