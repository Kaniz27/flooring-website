
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TAGLINE, COMPANY_NAME } from '../constants';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop',
    title: 'Modern Wood Flooring',
    subtitle: 'Timeless elegance for your home and office.'
  },
  {
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
    title: 'Premium Wall Panels',
    subtitle: 'Innovative interior solutions for vertical surfaces.'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'Bespoke Cabinets',
    subtitle: 'Custom furniture that defines your space.'
  }
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-linear scale-110"
            style={{ 
              backgroundImage: `url('${slide.image}')`,
              transform: idx === current ? 'scale(1)' : 'scale(1.1)' 
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`max-w-2xl text-white transition-all duration-1000 delay-300 transform ${
              idx === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h2 className="text-purple-400 font-bold tracking-widest uppercase mb-4 text-sm sm:text-base">
                {COMPANY_NAME}
              </h2>
              <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-lg">
                {TAGLINE}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/products"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-center transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  View Products
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-center transition-all hover:shadow-xl"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === current ? 'bg-purple-600 w-10' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
