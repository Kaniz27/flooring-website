
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { COMPANY_NAME, CONTACT_PHONE, CONTACT_EMAIL, CONTACT_ADDRESS, WHATSAPP_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">ASM Shahin</span>
                <span className="text-[10px] font-medium tracking-widest uppercase opacity-80">Flooring LLC</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional Supplier, Retailer & Wholesaler of high-quality Flooring & Interior Solutions based in Dubai. We transform spaces with elegance and durability.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1BKFNtAGEV/" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <FaFacebook />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <FaWhatsapp />
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Products</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Solutions</h4>
            <ul className="space-y-4">
              <li><Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Wood Flooring</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Wall Panels</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Carpet Tiles</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Cabinet Design</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-purple-500 mt-1" />
                <span className="text-slate-400 text-sm">{CONTACT_ADDRESS}</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-purple-500" />
                <span className="text-slate-400 text-sm">{CONTACT_PHONE}</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-purple-500" />
                <span className="text-slate-400 text-sm break-all">{CONTACT_EMAIL}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
