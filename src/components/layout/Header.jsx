import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, User, ChevronDown } from 'lucide-react';
import { crates } from '../../data/crates';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navItems = [
    {
      label: 'Crates',
      path: '/crates',
      hasDropdown: true,
      dropdownContent: 'crates'
    },
    {
      label: 'Shop',
      path: '/shop',
      hasDropdown: true,
      dropdownContent: 'shop'
    },
    {
      label: 'Gifts',
      path: '/gifts'
    },
    {
      label: 'About',
      path: '/about'
    },
    {
      label: 'How It Works',
      path: '/how-it-works'
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const handleDropdownEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="header">
      {/* Promo Banner */}
      <div className="promo-banner">
        <p>Holiday Sale! Get 30% off your first month. Use code: <strong>HOLIDAY30</strong></p>
      </div>

      <div className="header-main">
        <div className="container header-container">
          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="logo">
            <svg viewBox="0 0 120 40" className="logo-svg">
              <circle cx="20" cy="20" r="18" fill="#00AB5F" />
              <text x="20" y="26" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">K</text>
              <text x="70" y="28" fill="#1F2937" fontSize="22" fontWeight="bold" fontFamily="Nunito">KiwiCo</text>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navItems.map((item, index) => (
              <div
                key={item.path}
                className="nav-item"
                onMouseEnter={() => item.hasDropdown && handleDropdownEnter(index)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={16} />}
                </Link>

                {item.hasDropdown && activeDropdown === index && (
                  <div className="dropdown-menu">
                    {item.dropdownContent === 'crates' && (
                      <div className="dropdown-crates">
                        <div className="dropdown-section">
                          <h4>Shop by Crate</h4>
                          <div className="crate-grid">
                            {crates.map(crate => (
                              <Link
                                key={crate.id}
                                to={`/crates/${crate.slug}`}
                                className="crate-item"
                                style={{ '--crate-color': crate.color }}
                              >
                                <span className="crate-dot"></span>
                                <div>
                                  <span className="crate-name">{crate.name}</span>
                                  <span className="crate-age">Ages {crate.ageRange}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="dropdown-section">
                          <h4>Shop by Age</h4>
                          <div className="age-list">
                            <Link to="/crates?age=0-2">0-2 years</Link>
                            <Link to="/crates?age=2-4">2-4 years</Link>
                            <Link to="/crates?age=5-8">5-8 years</Link>
                            <Link to="/crates?age=9-12">9-12 years</Link>
                            <Link to="/crates?age=12+">12+ years</Link>
                          </div>
                        </div>
                      </div>
                    )}
                    {item.dropdownContent === 'shop' && (
                      <div className="dropdown-shop">
                        <div className="dropdown-section">
                          <h4>Categories</h4>
                          <div className="category-list">
                            <Link to="/shop?category=science">Science Kits</Link>
                            <Link to="/shop?category=engineering">Engineering Projects</Link>
                            <Link to="/shop?category=art">Art & Design</Link>
                            <Link to="/shop?category=cooking">Cooking & Baking</Link>
                            <Link to="/shop?category=books">Books</Link>
                          </div>
                        </div>
                        <div className="dropdown-section">
                          <h4>Featured</h4>
                          <div className="category-list">
                            <Link to="/shop?filter=bestsellers">Bestsellers</Link>
                            <Link to="/shop?filter=new">New Arrivals</Link>
                            <Link to="/shop?filter=sale">On Sale</Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="header-actions">
            {/* Search */}
            <div className={`search-container ${isSearchOpen ? 'open' : ''}`}>
              <button
                className="icon-btn"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              {isSearchOpen && (
                <div className="search-dropdown">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                </div>
              )}
            </div>

            {/* Account */}
            <Link to="/account" className="icon-btn" aria-label="Account">
              <User size={20} />
            </Link>

            {/* Cart */}
            <Link to="/cart" className="icon-btn cart-btn" aria-label="Cart">
              <ShoppingCart size={20} />
              <span className="cart-count">0</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {navItems.map((item, index) => (
            <div key={item.path} className="mobile-nav-item">
              <div
                className="mobile-nav-link"
                onClick={() => item.hasDropdown && setActiveDropdown(activeDropdown === index ? null : index)}
              >
                <Link to={item.path} onClick={() => !item.hasDropdown && setIsMobileMenuOpen(false)}>
                  {item.label}
                </Link>
                {item.hasDropdown && <ChevronDown size={20} className={activeDropdown === index ? 'rotate' : ''} />}
              </div>
              {item.hasDropdown && activeDropdown === index && (
                <div className="mobile-dropdown">
                  {item.dropdownContent === 'crates' && crates.map(crate => (
                    <Link
                      key={crate.id}
                      to={`/crates/${crate.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {crate.name} (Ages {crate.ageRange})
                    </Link>
                  ))}
                  {item.dropdownContent === 'shop' && (
                    <>
                      <Link to="/shop?category=science" onClick={() => setIsMobileMenuOpen(false)}>Science Kits</Link>
                      <Link to="/shop?category=engineering" onClick={() => setIsMobileMenuOpen(false)}>Engineering</Link>
                      <Link to="/shop?category=art" onClick={() => setIsMobileMenuOpen(false)}>Art & Design</Link>
                      <Link to="/shop?category=cooking" onClick={() => setIsMobileMenuOpen(false)}>Cooking</Link>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
