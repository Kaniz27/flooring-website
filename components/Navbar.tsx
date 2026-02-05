
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_LINK, COMPANY_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const navbarBg = isScrolled 
    ? 'bg-white shadow-md py-3' 
    : isHome ? 'bg-transparent py-5' : 'bg-white shadow-sm py-4';
  const textColor = (isScrolled || !isHome) ? 'text-slate-900' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg transition-transform group-hover:scale-110">
            A
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-lg leading-tight ${textColor}`}>ASM Shahin</span>
            <span className={`text-[10px] font-medium tracking-widest uppercase opacity-80 ${textColor}`}>Flooring LLC</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-purple-600 after:transition-all hover:after:w-full ${
                location.pathname === link.path ? 'text-purple-600 after:w-full' : textColor
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center space-x-2 transition-all hover:shadow-lg active:scale-95"
          >
            <FaWhatsapp className="text-lg" />
            <span>Connect With Me</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-md ${textColor}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="p-4 flex justify-between items-center border-bottom">
          <span className="font-bold text-xl text-purple-600">Menu</span>
          <button onClick={() => setIsOpen(false)} className="p-2 text-slate-900">
            <HiX size={28} />
          </button>
        </div>
        <div className="flex flex-col space-y-6 p-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-bold transition-colors ${
                location.pathname === link.path ? 'text-purple-600' : 'text-slate-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white py-4 rounded-xl text-center font-bold flex items-center justify-center space-x-3"
          >
            <FaWhatsapp size={24} />
            <span>WhatsApp Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
