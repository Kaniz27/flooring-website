
import React from 'react';
import { FaBuilding, FaUserTie, FaGlobe, FaCogs, FaUsers, FaHistory } from 'react-icons/fa';
import { COMPANY_NAME, TAGLINE } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-purple-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-800 skew-x-12 translate-x-1/4 opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">About Us</h1>
          <p className="text-xl text-purple-200 max-w-2xl">{TAGLINE}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop" 
                  alt="Office" 
                  className="rounded-3xl shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-purple-100 rounded-full z-0" />
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-purple-600 rounded-lg z-0 opacity-20" />
              </div>
            </div>
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <span className="text-purple-600 font-bold uppercase tracking-widest text-sm">Who We Are</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Excellence in Every Square Inch</h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {COMPANY_NAME} is a premier provider of flooring and interior solutions in the heart of Dubai. Established with a vision to redefine indoor and outdoor spaces, we have grown into a trusted supplier, retailer, and wholesaler for thousands of clients.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Our products range from the finest solid wood floors to modern PVC panels and bespoke kitchen cabinetry. We understand that your space is a reflection of your personality, and we are dedicated to providing materials that combine aesthetics with unparalleled durability.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="text-purple-600 text-2xl mt-1"><FaBuilding /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Residential</h4>
                    <p className="text-slate-500 text-sm">Homes that inspire.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-purple-600 text-2xl mt-1"><FaGlobe /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Commercial</h4>
                    <p className="text-slate-500 text-sm">Offices built for success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Core Operations</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Supplier', icon: <FaHistory />, desc: 'We source only the best materials globally, ensuring top-tier quality standards for our inventory.' },
              { title: 'Retailer', icon: <FaUserTie />, desc: 'Our Dragon Mart showroom offers a personalized shopping experience for individual homeowners.' },
              { title: 'Wholesaler', icon: <FaUsers />, desc: 'We provide competitive bulk pricing for contractors, interior designers, and major projects.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all text-center group">
                <div className="w-20 h-20 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
