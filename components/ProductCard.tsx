
import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { Product } from '../types';
import { WHATSAPP_LINK, CONTACT_PHONE } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-purple transition-all duration-300 group flex flex-col h-full border border-slate-100">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            product.usage === 'Indoor' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
          }`}>
            {product.usage}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="text-xs font-semibold text-purple-600 uppercase tracking-widest mb-2">
          {product.category}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-500 text-sm line-clamp-2 mb-6">
          {product.description}
        </p>

        <div className="mt-auto space-y-2">
          <div className="flex flex-col gap-2">
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-lg text-sm font-bold flex items-center justify-center space-x-2 transition-all active:scale-95"
            >
              <FaPhone className="text-xs" />
              <span>Call for Price</span>
            </a>
            <a
              href={`${WHATSAPP_LINK}?text=I am interested in ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-lg text-sm font-bold flex items-center justify-center space-x-2 transition-all active:scale-95"
            >
              <FaWhatsapp className="text-lg" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
          <Link
            to={`/products/${product.slug}`}
            className="block w-full text-center text-purple-600 py-2 text-sm font-bold hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
