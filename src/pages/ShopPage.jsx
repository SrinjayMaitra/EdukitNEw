import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, ChevronDown, X } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import { products, categories } from '../data/products';
import './ShopPage.css';

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-low', label: 'Price: Low to High' },
  { id: 'price-high', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' }
];

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const filterParam = searchParams.get('filter');

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category !== 'all') {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (filterParam === 'top-rated') {
      result = result.filter(p => p.rating >= 4.7);
    } else if (filterParam === 'sale') {
      result = result.filter(p => p.originalPrice);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => (a.badge ? -1 : 1));
    }

    return result;
  }, [selectedCategory, sortBy, filterParam]);

  return (
    <div className="shop-page">
      <section className="shop-hero">
        <div className="container">
          <h1>Laptops for Nigeria</h1>
          <p>Affordable, work-ready laptops shipped from India — built for the next wave of Nigerian IT professionals.</p>
        </div>
      </section>

      <div className="shop-content">
        <div className="container">
          <div className="shop-layout">
            <aside className="shop-sidebar">
              <div className="sidebar-section">
                <h3>Category</h3>
                <ul className="category-list">
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <button
                        className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                        onClick={() => handleCategoryChange(cat.id)}
                      >
                        {cat.name}
                        <span className="category-count">
                          {cat.id === 'all'
                            ? products.length
                            : products.filter(p => p.category === cat.id).length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-section">
                <h3>Price Range</h3>
                <div className="price-range">
                  <input type="range" min="0" max="400" />
                  <div className="price-labels">
                    <span>$0</span>
                    <span>$400+</span>
                  </div>
                </div>
              </div>
            </aside>

            <main className="shop-main">
              <div className="shop-toolbar">
                <div className="toolbar-left">
                  <button className="mobile-filter-btn" onClick={() => setIsMobileFilterOpen(true)}>
                    <Filter size={18} />
                    Filters
                  </button>
                  <span className="results-count">
                    {filteredProducts.length} laptop{filteredProducts.length !== 1 ? 's' : ''}
                  </span>
                </div>
                <div className="toolbar-right">
                  <div className="sort-dropdown">
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                      {sortOptions.map(option => (
                        <option key={option.id} value={option.id}>{option.label}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} />
                  </div>
                  <div className="view-toggles">
                    <button className={viewMode === 'grid' ? 'active' : ''} onClick={() => setViewMode('grid')} aria-label="Grid view">
                      <Grid size={18} />
                    </button>
                    <button className={viewMode === 'list' ? 'active' : ''} onClick={() => setViewMode('list')} aria-label="List view">
                      <List size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {selectedCategory !== 'all' && (
                <div className="active-filters">
                  <span className="filter-tag">
                    {categories.find(c => c.id === selectedCategory)?.name}
                    <button onClick={() => handleCategoryChange('all')}>
                      <X size={14} />
                    </button>
                  </span>
                  <button className="clear-all" onClick={() => handleCategoryChange('all')}>
                    Clear All
                  </button>
                </div>
              )}

              <div className={`products-grid ${viewMode}`}>
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="no-results">
                  <h3>No laptops found</h3>
                  <p>Try adjusting your filters.</p>
                  <button className="btn btn-primary" onClick={() => handleCategoryChange('all')}>
                    Clear Filters
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      <div className={`mobile-filter-modal ${isMobileFilterOpen ? 'open' : ''}`}>
        <div className="mobile-filter-header">
          <h3>Filters</h3>
          <button onClick={() => setIsMobileFilterOpen(false)}><X size={24} /></button>
        </div>
        <div className="mobile-filter-content">
          <div className="sidebar-section">
            <h4>Category</h4>
            <ul className="category-list">
              {categories.map(cat => (
                <li key={cat.id}>
                  <button
                    className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                    onClick={() => { handleCategoryChange(cat.id); setIsMobileFilterOpen(false); }}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mobile-filter-footer">
          <button className="btn btn-primary btn-full" onClick={() => setIsMobileFilterOpen(false)}>
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
