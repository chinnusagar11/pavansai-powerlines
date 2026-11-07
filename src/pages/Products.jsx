import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  X, 
  RefreshCw,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Zap,
  Cpu,
  ToggleRight,
  Activity,
  ShieldCheck,
  Sliders,
  Maximize,
  Layers,
  PhoneCall,
  Sparkles,
  MessageSquare,
  FileCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import Breadcrumb from '../components/Breadcrumb';
import EnquiryModal from '../components/EnquiryModal';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState('');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

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
        product.fullDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.specifications && Object.values(product.specifications).some(val => 
          val.toLowerCase().includes(searchQuery.toLowerCase())
        ));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSearchParams({});
  };

  const activeCategoryObj = useMemo(() => {
    if (selectedCategory === 'all') return null;
    return COMPANY_INFO.categories.find(c => c.id === selectedCategory) || null;
  }, [selectedCategory]);

  const categoryIcons = {
    'all': <Layers size={13} />,
    'overhead-lines': <Zap size={13} />,
    'transformer-spares': <Cpu size={13} />,
    'ab-switches': <ToggleRight size={13} />,
    'conductors': <Activity size={13} />,
    'earthing': <ShieldCheck size={13} />,
    'industrial-electricals': <Sliders size={13} />,
    'towers': <Maximize size={13} />,
  };

  const activeTabClass = 'bg-blue-600 text-white shadow-md shadow-blue-500/30 ring-2 ring-blue-400/40';
  const inactiveTabClass = 'bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700 border border-slate-200/90';

  return (
    <div className="space-y-6 sm:space-y-8 pb-16">
      
      {/* 1. Page Header with Symmetrical Alignment & Status Pill */}
      <section className="bg-gradient-to-b from-blue-50/70 via-white to-slate-50 py-7 sm:py-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between gap-3">
            <Breadcrumb items={[{ label: 'Products & Materials' }]} />
            
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 text-xs font-bold border-2 border-slate-200 hover:border-slate-300 transition-all shadow-2xs shrink-0"
              title="Return to Home Page"
            >
              <ArrowLeft size={14} className="text-blue-600" />
              <span>Back to Home</span>
            </Link>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mt-4">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-200 shadow-2xs text-[11px] font-bold text-slate-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-blue-700 uppercase tracking-wider">PSPL Certified Inventory</span>
                <span className="text-slate-300">&bull;</span>
                <span className="text-slate-600">IS &bull; IEC &bull; REC Standard</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
                Electrical Transmission & Distribution Materials
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Wholesale supplier and stockist of overhead line hardware, insulators, AB switches, conductors, earthing materials, and GI towers based in Secunderabad.
              </p>
            </div>

            {/* Quick Metrics Chips */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 shrink-0">
              <div className="bg-white px-3.5 py-2 rounded-xl border border-blue-100 shadow-2xs text-center min-w-[100px]">
                <strong className="block text-sm sm:text-base font-black text-blue-600 font-heading">{PRODUCTS.length}</strong>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Products</span>
              </div>
              <div className="bg-white px-3.5 py-2 rounded-xl border border-indigo-100 shadow-2xs text-center min-w-[100px]">
                <strong className="block text-sm sm:text-base font-black text-indigo-600 font-heading">7</strong>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Divisions</span>
              </div>
              <div className="bg-white px-3.5 py-2 rounded-xl border border-emerald-100 shadow-2xs text-center min-w-[100px]">
                <strong className="block text-sm sm:text-base font-black text-emerald-600 font-heading">100%</strong>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Authentic</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* 2. Elevated Search & Filter Control Command Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-5 rounded-2xl border-2 border-slate-200/90 shadow-sm space-y-4">
          
          {/* Top Row: Search Input & Product Count Symmetrically Aligned */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            
            {/* Search Input Field */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-600 w-4 h-4 pointer-events-none" />
              <input
                type="text"
                placeholder="Search products by name, standard, or rating (e.g. 11kV, ACSR, AB Switch, Copper)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-9 py-2.5 text-xs sm:text-sm rounded-xl border-2 border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-slate-50/50 hover:bg-white transition-all font-medium placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 rounded-md hover:bg-slate-100"
                  title="Clear search query"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Results Count & Reset Button */}
            <div className="flex items-center justify-between sm:justify-end gap-3 text-xs text-slate-600 shrink-0">
              <span className="font-medium">
                Showing <strong className="text-slate-900 font-black">{filteredProducts.length}</strong> of {PRODUCTS.length} Items
              </span>

              {(selectedCategory !== 'all' || searchQuery) && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold transition text-xs border border-blue-200"
                >
                  <RefreshCw size={12} />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>

          </div>

          {/* Bottom Row: Symmetrical Division Filter Tabs with Icons */}
          <div className="pt-3 border-t border-slate-100">
            <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-none -mx-1 px-1">
              
              {/* "All" Tab */}
              <button
                onClick={() => handleCategorySelect('all')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  selectedCategory === 'all' ? activeTabClass : inactiveTabClass
                }`}
              >
                {categoryIcons['all']}
                <span>All Categories</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${selectedCategory === 'all' ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-600'}`}>
                  {PRODUCTS.length}
                </span>
              </button>

              {/* 7 Category Tabs */}
              {COMPANY_INFO.categories.map((cat) => {
                const count = PRODUCTS.filter(p => p.categoryId === cat.id).length;
                const isSelected = selectedCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                      isSelected ? activeTabClass : inactiveTabClass
                    }`}
                  >
                    {categoryIcons[cat.id] || <Zap size={13} />}
                    <span>{cat.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-600'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}

            </div>
          </div>

        </div>
      </section>


      {/* 3. Active Category Informative Banner (Contextual Guidance) */}
      {activeCategoryObj && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50/90 via-sky-50/50 to-indigo-50/80 border-2 border-blue-200 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-2xs">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/25 mt-0.5">
                {categoryIcons[activeCategoryObj.id] || <Zap size={20} />}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base sm:text-lg font-black text-slate-900 font-heading">
                    {activeCategoryObj.name}
                  </h2>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md border border-emerald-200">
                    Ready Stock
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                  {activeCategoryObj.shortDesc}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl shadow-md ring-2 ring-amber-300/40 hover:scale-102 transition"
              >
                <FileCheck size={14} />
                <span>Request {activeCategoryObj.name} Quote</span>
              </button>
            </div>
          </div>
        </section>
      )}


      {/* 4. Products Grid - Laser Symmetrical 3-Column Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 sm:p-12 text-center max-w-md mx-auto space-y-4 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center border border-blue-100 shadow-2xs">
              <Search size={26} />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-extrabold text-base sm:text-lg text-slate-900">No matching products found</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We could not find any products matching <strong className="text-slate-900">"{searchQuery}"</strong> in this category.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-blue-700 shadow-md transition"
              >
                <RefreshCw size={13} />
                <span>Show All {PRODUCTS.length} Products</span>
              </button>
            </div>
          </div>
        )}

      </section>


      {/* 5. Project BOQ Material Quotation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-3.5 text-center lg:text-left max-w-2xl">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-xs text-white hidden sm:flex items-center justify-center shrink-0 shadow-md ring-2 ring-white/30">
              <FileCheck size={24} />
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-lg sm:text-xl font-heading text-white">
                Have a Bill of Quantities (BOQ) or Bulk Requirement?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                Submit your project specifications or required material schedule directly to our commercial sales desk in Secunderabad for formal contractor pricing.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg ring-2 ring-amber-300/40 transition active:scale-97"
            >
              <MessageSquare size={15} className="text-slate-950 font-black" />
              <span>Submit Project BOQ</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition"
            >
              <PhoneCall size={14} className="text-blue-600" />
              <span>Call Sales: {COMPANY_INFO.contact.primaryPhone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <EnquiryModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

    </div>
  );
}
