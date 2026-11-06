import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  X, 
  Layers, 
  Zap, 
  ChevronRight, 
  CheckCircle2, 
  SlidersHorizontal,
  RefreshCw
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { PRODUCTS, getProductsByCategory, searchProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import Breadcrumb from '../components/Breadcrumb';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState('');

  // Sync state if URL query param changes (e.g. from navbar dropdown)
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  // Handle category change and sync with URL query
  const handleCategorySelect = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  // Filter products by selected category and search term
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.categoryId === selectedCategory;
      const matchesSearch = 
        !searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.fullDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSearchParams({});
  };

  return (
    <div className="space-y-8 md:space-y-12 pb-16">
      
      {/* 1. Page Header */}
      <section className="bg-navy-950 text-white py-12 md:py-16 border-b border-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Products & Supplies' }]} />
          
          <div className="max-w-3xl space-y-3 mt-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider">
              Product Catalogue
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
              Electrical Products & Transmission Materials
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore our complete product catalogue spanning HT/LT line hardware, transformer components, AB switches, conductors, earthing solutions, and GI towers.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Search, Filter, and Controls Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
          
          {/* Top Row: Search input & Status */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search products, materials, specs (e.g. 11kV, ACSR, AB Switch)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/60 focus:bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Product Counter */}
            <div className="flex items-center justify-between md:justify-end gap-3 text-xs text-slate-500">
              <span className="font-medium">
                Showing <strong className="text-navy-950 font-bold">{filteredProducts.length}</strong> of {PRODUCTS.length} Products
              </span>

              {(selectedCategory !== 'all' || searchQuery) && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 font-semibold"
                >
                  <RefreshCw size={12} />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>

          </div>

          {/* Bottom Row: Category Filter Tabs */}
          <div className="pt-3 border-t border-slate-100">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
              
              <button
                onClick={() => handleCategorySelect('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === 'all'
                    ? 'bg-navy-950 text-white shadow'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Categories ({PRODUCTS.length})
              </button>

              {COMPANY_INFO.categories.map((cat) => {
                const count = PRODUCTS.filter(p => p.categoryId === cat.id).length;
                const isSelected = selectedCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                      isSelected
                        ? 'bg-sky-600 text-white shadow'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat.name} ({count})
                  </button>
                );
              })}

            </div>
          </div>

        </div>
      </section>

      {/* 3. Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
              <Search size={28} />
            </div>
            <h3 className="font-bold text-lg text-navy-950">No products found</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              We couldn't find any products matching your search term: <strong className="text-slate-900">"{searchQuery}"</strong> in the selected category.
            </p>
            <div className="pt-2">
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 bg-navy-900 text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-navy-800 transition"
              >
                <RefreshCw size={14} />
                <span>Show All Products</span>
              </button>
            </div>
          </div>
        )}

      </section>

      {/* 4. Commercial Verification Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="bg-sky-50/70 border border-sky-100 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700">
              <strong className="text-navy-950 block">Commercial Ordering & Dispatch Support</strong>
              All products listed are supplied in standard industrial batch sizes, drum lengths (for ACSR/AAAC conductors), and crated assemblies. For test certificates and manufacturer compliance data, contact our sales desk directly.
            </div>
          </div>

          <a
            href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
            className="shrink-0 bg-white hover:bg-slate-50 text-navy-950 border border-slate-200 text-xs font-semibold px-4 py-2.5 rounded-xl shadow-sm transition"
          >
            Direct Sales: {COMPANY_INFO.contact.primaryPhone}
          </a>
        </div>
      </section>

    </div>
  );
}
