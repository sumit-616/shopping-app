import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <CartProvider>
      <Header />
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  );
};

export default App;