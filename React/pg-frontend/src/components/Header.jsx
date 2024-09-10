import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <nav>
        <ul className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          <li><Link to="/login" className="hover:underline">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
