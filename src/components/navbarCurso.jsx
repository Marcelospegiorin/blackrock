// src/components/Navbar.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar fixed top-0 w-full z-50 glass-effect border-b border-light/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl lg:text-3xl font-bebas text-shadow transition-colors duration-300">
              BLACK ROCK
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-gold text-shadow transition-colors duration-300">Início</Link>
              <a href="#instrutores" className="hover:text-gold text-shadow transition-colors duration-300">Instrutores</a>
              <a href="#detalhes" className="hover:text-gold text-shadow transition-colors duration-300">Detalhes</a>
            </div>
            <button
              className={`md:hidden text-light text-xl menu-icon ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden glass-effect border-t border-light/20 transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen
            ? 'max-h-80 opacity-100' 
            : 'max-h-0 opacity-0'   
          }`}>
          <div className={`container mx-auto px-4 space-y-4 transition-all duration-300 ease-in-out transform ${mobileMenuOpen
              ? 'py-4 translate-y-0'
              : 'py-0 -translate-y-4'
            }`}>
            <Link to="/" className="block hover:text-light transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Início</Link>
            <Link to="/cursos" className="block hover:text-light transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Cursos</Link>
            <a href="#instrutores" className="block hover:text-light transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Instrutores</a>
            <a href="#detalhes" className="block hover:text-light transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Detalhes</a>
          </div>
        </div>
      </nav>
  );
}