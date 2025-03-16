import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-[#0d1324] text-white py-4 px-12">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="ShopEase Logo" className="h-12" />
          <div>
            <h1 className="text-[#4CAF50] text-2xl font-bold">ShopEase</h1>
            <p className="text-[#4CAF50] text-sm hidden sm:block">
              Shopping made easy.
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-lg text-white hover:text-[#60a5fa] transition duration-300">
            Home
          </Link>
          <Link to="/cart" className="relative flex items-center">
            <FaShoppingCart size={24} className="text-white hover:text-[#60a5fa] transition duration-300" />
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;
