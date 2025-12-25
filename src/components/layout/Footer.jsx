import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: {
      title: 'Shop',
      links: [
        { label: 'All Crates', path: '/crates' },
        { label: 'Shop Products', path: '/shop' },
        { label: 'Gift Cards', path: '/gift-cards' },
        { label: 'Gifts', path: '/gifts' },
        { label: 'Sale', path: '/shop?filter=sale' }
      ]
    },
    crates: {
      title: 'Crate Lines',
      links: [
        { label: 'Panda Crate (0-2)', path: '/crates/panda-crate' },
        { label: 'Koala Crate (2-4)', path: '/crates/koala-crate' },
        { label: 'Kiwi Crate (5-8)', path: '/crates/kiwi-crate' },
        { label: 'Atlas Crate (6-11)', path: '/crates/atlas-crate' },
        { label: 'Tinker Crate (9-16+)', path: '/crates/tinker-crate' },
        { label: 'Doodle Crate (9-16+)', path: '/crates/doodle-crate' },
        { label: 'Maker Crate (14+)', path: '/crates/maker-crate' },
        { label: 'Eureka Crate (14+)', path: '/crates/eureka-crate' }
      ]
    },
    company: {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'How It Works', path: '/how-it-works' },
        { label: 'Careers', path: '/careers' },
        { label: 'Press', path: '/press' },
        { label: 'Blog', path: '/blog' }
      ]
    },
    support: {
      title: 'Support',
      links: [
        { label: 'Help Center', path: '/help' },
        { label: 'Contact Us', path: '/contact' },
        { label: 'Shipping Info', path: '/shipping' },
        { label: 'Returns', path: '/returns' },
        { label: 'FAQs', path: '/faqs' }
      ]
    }
  };

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>Join the KiwiCo Family</h3>
              <p>Get exclusive offers, project ideas, and parenting tips delivered to your inbox.</p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <Mail size={20} />
                <input type="email" placeholder="Enter your email" />
              </div>
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <svg viewBox="0 0 120 40" className="logo-svg">
                  <circle cx="20" cy="20" r="18" fill="#00AB5F" />
                  <text x="20" y="26" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">K</text>
                  <text x="70" y="28" fill="#FFFFFF" fontSize="22" fontWeight="bold" fontFamily="Nunito">KiwiCo</text>
                </svg>
              </Link>
              <p className="footer-tagline">
                Inspiring the next generation of innovators through hands-on projects and creative play.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
              </div>
            </div>

            {/* Link Columns */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.title} className="footer-column">
                <h4>{section.title}</h4>
                <ul>
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link to={link.path}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} KiwiCo Clone. All rights reserved.</p>
            <div className="footer-legal">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/accessibility">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
