import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Shopping App</Link>
        <nav>
          <Link to="/cart" className="text-lg hover:underline">Cart</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;