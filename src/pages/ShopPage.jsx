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
  { id: 'rating', label: 'Top Rated' },
  { id: 'newest', label: 'Newest' }
];

const ageFilters = [
  { id: 'all', label: 'All Ages' },
  { id: '3+', label: '3+' },
  { id: '5+', label: '5+' },
  { id: '7+', label: '7+' },
  { id: '10+', label: '10+' }
];

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const filterParam = searchParams.get('filter');

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedAge, setSelectedAge] = useState('all');
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

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by special badges
    if (filterParam === 'bestsellers') {
      result = result.filter(p => p.badge === 'Bestseller');
    } else if (filterParam === 'sale') {
      result = result.filter(p => p.originalPrice);
    } else if (filterParam === 'new') {
      result = result.filter(p => p.badge === 'New');
    }

    // Filter by age
    if (selectedAge !== 'all') {
      const minAge = parseInt(selectedAge);
      result = result.filter(p => {
        const productAge = parseInt(p.ageRange);
        return productAge <= minAge;
      });
    }

    // Sort
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
      case 'newest':
        result.sort((a, b) => (a.badge === 'New' ? -1 : 1));
        break;
      default:
        // Featured - keep original order with badges first
        result.sort((a, b) => (a.badge ? -1 : 1));
    }

    return result;
  }, [selectedCategory, selectedAge, sortBy, filterParam]);

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="shop-page">
      {/* Hero Section */}
      <section className="shop-hero">
        <div className="container">
          <h1>Shop Projects & Kits</h1>
          <p>
            Discover our collection of hands-on STEAM projects.
            Perfect for one-time fun or as gifts!
          </p>
        </div>
      </section>

      <div className="shop-content">
        <div className="container">
          <div className="shop-layout">
            {/* Desktop Sidebar */}
            <aside className="shop-sidebar">
              <div className="sidebar-section">
                <h3>Categories</h3>
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
                <h3>Age Range</h3>
                <div className="age-filters">
                  {ageFilters.map(age => (
                    <button
                      key={age.id}
                      className={`age-filter-btn ${selectedAge === age.id ? 'active' : ''}`}
                      onClick={() => setSelectedAge(age.id)}
                    >
                      {age.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="sidebar-section">
                <h3>Price Range</h3>
                <div className="price-range">
                  <input type="range" min="0" max="50" />
                  <div className="price-labels">
                    <span>$0</span>
                    <span>$50+</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="shop-main">
              {/* Toolbar */}
              <div className="shop-toolbar">
                <div className="toolbar-left">
                  <button
                    className="mobile-filter-btn"
                    onClick={() => setIsMobileFilterOpen(true)}
                  >
                    <Filter size={18} />
                    Filters
                  </button>
                  <span className="results-count">
                    {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                  </span>
                </div>
                <div className="toolbar-right">
                  <div className="sort-dropdown">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      {sortOptions.map(option => (
                        <option key={option.id} value={option.id}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={16} />
                  </div>
                  <div className="view-toggles">
                    <button
                      className={viewMode === 'grid' ? 'active' : ''}
                      onClick={() => setViewMode('grid')}
                      aria-label="Grid view"
                    >
                      <Grid size={18} />
                    </button>
                    <button
                      className={viewMode === 'list' ? 'active' : ''}
                      onClick={() => setViewMode('list')}
                      aria-label="List view"
                    >
                      <List size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              {(selectedCategory !== 'all' || selectedAge !== 'all') && (
                <div className="active-filters">
                  {selectedCategory !== 'all' && (
                    <span className="filter-tag">
                      {categories.find(c => c.id === selectedCategory)?.name}
                      <button onClick={() => handleCategoryChange('all')}>
                        <X size={14} />
                      </button>
                    </span>
                  )}
                  {selectedAge !== 'all' && (
                    <span className="filter-tag">
                      Age: {selectedAge}
                      <button onClick={() => setSelectedAge('all')}>
                        <X size={14} />
                      </button>
                    </span>
                  )}
                  <button
                    className="clear-all"
                    onClick={() => {
                      handleCategoryChange('all');
                      setSelectedAge('all');
                    }}
                  >
                    Clear All
                  </button>
                </div>
              )}

              {/* Products Grid */}
              <div className={`products-grid ${viewMode}`}>
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="no-results">
                  <h3>No products found</h3>
                  <p>Try adjusting your filters to find what you're looking for.</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      handleCategoryChange('all');
                      setSelectedAge('all');
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      <div className={`mobile-filter-modal ${isMobileFilterOpen ? 'open' : ''}`}>
        <div className="mobile-filter-header">
          <h3>Filters</h3>
          <button onClick={() => setIsMobileFilterOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <div className="mobile-filter-content">
          <div className="sidebar-section">
            <h4>Categories</h4>
            <ul className="category-list">
              {categories.map(cat => (
                <li key={cat.id}>
                  <button
                    className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(cat.id)}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebar-section">
            <h4>Age Range</h4>
            <div className="age-filters">
              {ageFilters.map(age => (
                <button
                  key={age.id}
                  className={`age-filter-btn ${selectedAge === age.id ? 'active' : ''}`}
                  onClick={() => setSelectedAge(age.id)}
                >
                  {age.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mobile-filter-footer">
          <button
            className="btn btn-primary btn-full"
            onClick={() => setIsMobileFilterOpen(false)}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
