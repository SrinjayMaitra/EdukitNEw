import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, User, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Header.css';

const Header = () => {
  const { itemCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navItems = [
    {
      label: 'Laptops',
      path: '/shop',
      hasDropdown: true,
      dropdownItems: [
        { label: 'All Laptops', path: '/shop' },
        { label: 'Budget (Under $250)', path: '/shop?category=budget' },
        { label: 'Mid-Range ($250–$370)', path: '/shop?category=mid-range' },
        { label: 'Refurbished', path: '/shop?category=refurbished' },
        { label: 'Top Rated', path: '/shop?filter=top-rated' }
      ]
    },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className="header">
      <div className="promo-banner">
        <p>Free shipping to Nigeria on orders over $300 · Delivered in 7–14 days</p>
      </div>

      <div className="header-main">
        <div className="container header-container">
          <button
            className="mobile-menu-toggle"
            onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); setActiveDropdown(null); }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link to="/" className="logo">
            <svg viewBox="0 0 140 40" className="logo-svg">
              <circle cx="20" cy="20" r="18" fill="#00AB5F" />
              <text x="20" y="26" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">E</text>
              <text x="46" y="28" fill="#1F2937" fontSize="20" fontWeight="800" fontFamily="system-ui">Edukit</text>
            </svg>
          </Link>

          <nav className="nav-desktop">
            {navItems.map((item, index) => (
              <div
                key={item.path}
                className="nav-item"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={15} />}
                </Link>

                {item.hasDropdown && activeDropdown === index && (
                  <div className="dropdown-menu">
                    <div className="dropdown-shop">
                      <div className="dropdown-section">
                        {item.dropdownItems.map(d => (
                          <Link key={d.path} to={d.path} className="dropdown-link">
                            {d.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="header-actions">
            <div className={`search-container ${isSearchOpen ? 'open' : ''}`}>
              <button className="icon-btn" onClick={() => setIsSearchOpen(!isSearchOpen)} aria-label="Search">
                <Search size={20} />
              </button>
              {isSearchOpen && (
                <div className="search-dropdown">
                  <input
                    type="text"
                    placeholder="Search laptops..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                </div>
              )}
            </div>

            <Link to="/account" className="icon-btn" aria-label="Account">
              <User size={20} />
            </Link>

            <Link to="/cart" className="icon-btn cart-btn" aria-label="Cart">
              <ShoppingCart size={20} />
              {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
            </Link>
          </div>
        </div>
      </div>

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
                  {item.dropdownItems.map(d => (
                    <Link key={d.path} to={d.path} onClick={() => setIsMobileMenuOpen(false)}>
                      {d.label}
                    </Link>
                  ))}
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
