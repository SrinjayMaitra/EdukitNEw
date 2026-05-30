import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: {
      title: 'Shop',
      links: [
        { label: 'All Laptops', path: '/shop' },
        { label: 'Budget Laptops', path: '/shop?category=budget' },
        { label: 'Mid-Range Laptops', path: '/shop?category=mid-range' },
        { label: 'Refurbished', path: '/shop?category=refurbished' }
      ]
    },
    company: {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'How It Works', path: '/how-it-works' },
        { label: 'Blog', path: '/blog' },
        { label: 'Careers', path: '/careers' }
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
    },
    legal: {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', path: '/privacy' },
        { label: 'Terms of Service', path: '/terms' },
        { label: 'Accessibility', path: '/accessibility' }
      ]
    }
  };

  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>Stay in the loop</h3>
              <p>Get notified about new laptop arrivals, deals, and IT career resources.</p>
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

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <svg viewBox="0 0 140 40" className="logo-svg">
                  <circle cx="20" cy="20" r="18" fill="#00AB5F" />
                  <text x="20" y="26" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">E</text>
                  <text x="46" y="28" fill="#FFFFFF" fontSize="20" fontWeight="800" fontFamily="system-ui">Edukit</text>
                </svg>
              </Link>
              <p className="footer-tagline">
                Bridging the digital divide — shipping quality, affordable laptops from India to Nigeria to power the next generation of IT professionals.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              </div>
            </div>

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

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Edukit. All rights reserved. Operated from India · Delivering to Nigeria.</p>
            <div className="footer-legal">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
