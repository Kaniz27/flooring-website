
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGem, FaTruck, FaTools, FaCheckCircle } from 'react-icons/fa';
import HeroSlider from '../components/HeroSlider';
import { PRODUCT_CATEGORIES, CONTACT_ADDRESS } from '../constants';

const Home: React.FC = () => {
  const categoryImages: Record<string, string> = {
    'Flooring': 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2070&auto=format&fit=crop',
    'Wall Panels': 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2074&auto=format&fit=crop',
    'Accessories': 'https://images.unsplash.com/photo-1503602642458-2321159b556a?q=80&w=2069&auto=format&fit=crop',
    'Carpet': 'https://images.unsplash.com/photo-1582234052329-a1b6932a3962?q=80&w=2070&auto=format&fit=crop',
    'Cabinet & Furniture': 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop'
  };

  return (
    <div className="overflow-hidden">
      <HeroSlider />

      {/* Stats/Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <FaGem />, title: 'Premium Quality', desc: 'Hand-picked materials from top manufacturers.' },
              { icon: <FaTruck />, title: 'Fast Delivery', desc: 'Reliable distribution across the UAE.' },
              { icon: <FaTools />, title: 'Expert Install', desc: 'Professional team for perfect results.' },
              { icon: <FaCheckCircle />, title: 'Satisfaction', desc: 'Trusted by hundreds of happy clients.' }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 hover:bg-purple-50 rounded-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Explore Our Collections</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We offer a wide range of interior solutions to bring your vision to life. From natural wood floors to artistic wall panels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCT_CATEGORIES.map((cat, idx) => (
              <Link 
                key={cat} 
                to={`/products?category=${cat}`}
                className={`group relative overflow-hidden rounded-3xl h-80 shadow-md ${idx === 3 || idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${categoryImages[cat]}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">{cat}</h3>
                  <div className="flex items-center text-white/80 text-sm font-semibold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    <span>Explore Products</span>
                    <FaArrowRight className="ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Google Map Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Visit Our Showroom</h2>
              <p className="text-slate-600 leading-relaxed">
                Come visit us at Dragon Mart-1 to see our full range of products in person. Our experts are ready to help you choose the perfect flooring and interior solutions for your project.
              </p>
              <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                <h4 className="font-bold text-slate-900 mb-2">Our Location</h4>
                <p className="text-slate-600 text-sm mb-4">{CONTACT_ADDRESS}</p>
                <a 
                  href="https://maps.google.com/?q=Dragon+Mart+1+Dubai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 font-bold hover:underline"
                >
                  Get Directions <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>
            <div className="flex-1 w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115546.99222441955!2d55.26359052028169!3d25.174828362615462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6063b715694d%3A0xc34a06584f18d533!2sDragon%20Mart!5e0!3m2!1sen!2sae!4v1709193421253!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
