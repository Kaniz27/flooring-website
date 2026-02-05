
import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HiSearch, HiFilter } from 'react-icons/hi';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../constants';
import { ProductCategory } from '../types';

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  
  const activeCategory = searchParams.get('category') || 'All';

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (cat: string) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Search & Filter Header */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h1 className="text-3xl font-serif font-bold text-slate-900">Our Collections</h1>
            <div className="relative flex-grow max-w-md">
              <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-3 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-purple-600 transition-all outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Categories */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 sticky top-28">
              <div className="flex items-center space-x-2 mb-6">
                <HiFilter className="text-purple-600" />
                <h3 className="font-bold text-lg">Categories</h3>
              </div>
              <div className="flex flex-wrap lg:flex-col gap-2">
                <button
                  onClick={() => handleCategoryChange('All')}
                  className={`px-4 py-2.5 rounded-xl text-left text-sm font-semibold transition-all ${
                    activeCategory === 'All' 
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' 
                    : 'text-slate-600 hover:bg-purple-50'
                  }`}
                >
                  All Products
                </button>
                {PRODUCT_CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-4 py-2.5 rounded-xl text-left text-sm font-semibold transition-all ${
                      activeCategory === cat 
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' 
                      : 'text-slate-600 hover:bg-purple-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
                <div className="text-slate-300 text-6xl mb-4 flex justify-center"><HiSearch /></div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No products found</h3>
                <p className="text-slate-500">Try adjusting your search or filters.</p>
                <button 
                  onClick={() => {setSearchQuery(''); handleCategoryChange('All');}}
                  className="mt-6 text-purple-600 font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
