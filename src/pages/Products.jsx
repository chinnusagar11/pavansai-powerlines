import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  X, 
  RefreshCw,
  CheckCircle2,
  ArrowLeft
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import Breadcrumb from '../components/Breadcrumb';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleCategorySelect = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

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
    <div className="space-y-6 sm:space-y-10 pb-16">
      
      {/* 1. Page Header */}
      <section className="bg-gradient-to-b from-blue-50/60 to-white py-8 sm:py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            <Breadcrumb items={[{ label: 'Products & Supplies' }]} />
            
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200 transition shadow-2xs shrink-0"
              title="Return to Home Page"
            >
              <ArrowLeft size={14} className="text-blue-600" />
              <span>Back to Home</span>
            </Link>
          </div>
          
          <div className="max-w-3xl space-y-2 mt-2">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-100/70 px-2.5 py-1 rounded-md border border-blue-200">
              Product Catalogue
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
              Electrical Products & Materials
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Explore overhead line materials, transformer spares, AB switches, conductors, earthing equipment, and GI towers.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Clean Search & Filter Controls */}
      <section className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="bg-white p-3.5 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-3.5">
          
          {/* Top Row: Search input & Status */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search products (e.g. 11kV, ACSR, AB Switch)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-9 py-2.5 text-base sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            <div className="flex items-center justify-between md:justify-end gap-3 text-xs text-slate-600">
              <span>
                Showing <strong className="text-slate-900 font-bold">{filteredProducts.length}</strong> of {PRODUCTS.length} Products
              </span>

              {(selectedCategory !== 'all' || searchQuery) && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <RefreshCw size={12} />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>

          </div>

          {/* Bottom Row: Category Filter Tabs (Swipeable on Mobile) */}
          <div className="pt-2 border-t border-slate-100">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none -mx-1 px-1">
              
              <button
                onClick={() => handleCategorySelect('all')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors shrink-0 ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white shadow-xs'
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
                    className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors shrink-0 ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-xs'
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
      <section className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 p-8 sm:p-10 text-center max-w-md mx-auto space-y-3">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
              <Search size={22} />
            </div>
            <h3 className="font-bold text-base text-slate-900">No products found</h3>
            <p className="text-xs text-slate-600">
              No matching products found for <strong className="text-slate-800">"{searchQuery}"</strong>.
            </p>
            <div className="pt-1">
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-blue-700 transition"
              >
                <RefreshCw size={13} />
                <span>Show All Products</span>
              </button>
            </div>
          </div>
        )}

      </section>

      {/* 4. Commercial Verification Note */}
      <section className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700">
              <strong className="text-slate-900 block">Supply & Ordering Guidance</strong>
              All products are supplied in standard industrial batch sizes and drum lengths. For test certificates and delivery schedules, contact our Secunderabad desk.
            </div>
          </div>

          <a
            href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
            className="w-full sm:w-auto text-center shrink-0 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs font-semibold px-4 py-2.5 rounded-lg transition"
          >
            Sales Desk: {COMPANY_INFO.contact.primaryPhone}
          </a>
        </div>
      </section>

    </div>
  );
}
