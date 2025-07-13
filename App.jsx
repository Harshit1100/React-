
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// my own pages and components
import HomePage from './pages/Home';
import AllItems from './pages/Products';
import OneItem from './pages/ProductDetail';
import CartThing from './pages/Cart';

import TopMenu from './components/Navbar';
import BottomBit from './components/Footer';

function ShopApp() {
  return (
    <Router>
      <div>
        {}
        <TopMenu />

        {}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<AllItems />} />
          <Route path="/products/:id" element={<OneItem />} />
          <Route path="/cart" element={<CartThing />} />
        </Routes>

        {}
        <BottomBit />
      </div>
    </Router>
  );
}

export default ShopApp;
