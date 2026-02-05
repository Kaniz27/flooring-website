
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaPhone, FaArrowLeft, FaCheckCircle, FaTag, FaTools } from 'react-icons/fa';
import { PRODUCTS, CONTACT_PHONE, WHATSAPP_LINK } from '../constants';

const ProductDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products" className="text-purple-600 font-bold hover:underline">Back to Collections</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-slate-50 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-slate-500 hover:text-purple-600 font-medium mb-8 transition-colors group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to products</span>
        </button>

        <div className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-slate-100 p-6 md:p-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Image Gallery (Simulation) */}
            <div className="lg:w-1/2 space-y-4">
              <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100 shadow-inner">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden cursor-pointer hover:opacity-80 border-2 border-transparent hover:border-purple-600 transition-all">
                    <img src={`https://picsum.photos/seed/${product.id + i}/200/200`} alt="Thumbnail" />
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="lg:w-1/2">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-lg text-xs font-bold uppercase tracking-widest">
                    {product.category}
                  </span>
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest ${
                    product.usage === 'Indoor' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                  }`}>
                    {product.usage}
                  </span>
                </div>
                <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">{product.name}</h1>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">{product.description}</p>
              </div>

              {/* Key Features */}
              <div className="mb-10">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                  <FaTag className="mr-2 text-purple-600" /> Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-slate-600">
                      <FaCheckCircle className="text-purple-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Installation Banner */}
              <div className="bg-purple-50 border border-purple-100 p-6 rounded-2xl mb-10 flex items-start space-x-4">
                <div className="text-3xl text-purple-600 mt-1"><FaTools /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Professional Installation</h4>
                  <p className="text-sm text-slate-600">We offer expert installation services for all our products. Ask our team for a site visit and quotation.</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-3 transition-all active:scale-95 shadow-lg"
                >
                  <FaPhone />
                  <span>Call for Price</span>
                </a>
                <a
                  href={`${WHATSAPP_LINK}?text=Hello, I would like to inquire about the ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-3 transition-all active:scale-95 shadow-lg"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
