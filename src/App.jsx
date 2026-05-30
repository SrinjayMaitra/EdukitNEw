import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';
import CartPage from './pages/CartPage';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/product/:id" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/account" element={<AccountPlaceholder />} />
          <Route path="/help" element={<PlaceholderPage title="Help Center" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
          <Route path="/shipping" element={<PlaceholderPage title="Shipping Information" />} />
          <Route path="/returns" element={<PlaceholderPage title="Returns" />} />
          <Route path="/faqs" element={<PlaceholderPage title="FAQs" />} />
          <Route path="/careers" element={<PlaceholderPage title="Careers" />} />
          <Route path="/press" element={<PlaceholderPage title="Press" />} />
          <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
          <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
          <Route path="/accessibility" element={<PlaceholderPage title="Accessibility" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Layout>
      </CartProvider>
    </Router>
  );
}

function PlaceholderPage({ title }) {
  return (
    <div style={{
      minHeight: '60vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', flexDirection: 'column', padding: '40px 20px', textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '36px', marginBottom: '16px' }}>{title}</h1>
      <p style={{ color: '#6B7280', marginBottom: '24px' }}>This page is coming soon.</p>
      <a href="/" style={{
        padding: '12px 24px', background: '#00AB5F', color: 'white',
        borderRadius: '9999px', fontWeight: '600', textDecoration: 'none'
      }}>Back to Home</a>
    </div>
  );
}

function AccountPlaceholder() {
  return (
    <div style={{
      minHeight: '60vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', flexDirection: 'column', padding: '40px 20px',
      textAlign: 'center', background: '#F9FAFB'
    }}>
      <div style={{
        background: 'white', padding: '48px', borderRadius: '16px',
        maxWidth: '400px', width: '100%', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>Sign In</h1>
        <p style={{ color: '#6B7280', marginBottom: '24px' }}>Access your orders and account details.</p>
        <div style={{ marginBottom: '16px' }}>
          <input type="email" placeholder="Email address" style={{
            width: '100%', padding: '12px 16px', border: '1px solid #E5E7EB',
            borderRadius: '8px', fontSize: '16px', boxSizing: 'border-box'
          }} />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <input type="password" placeholder="Password" style={{
            width: '100%', padding: '12px 16px', border: '1px solid #E5E7EB',
            borderRadius: '8px', fontSize: '16px', boxSizing: 'border-box'
          }} />
        </div>
        <button style={{
          width: '100%', padding: '14px 24px', background: '#00AB5F', color: 'white',
          border: 'none', borderRadius: '9999px', fontWeight: '600', fontSize: '16px',
          cursor: 'pointer', marginBottom: '16px'
        }}>Sign In</button>
        <p style={{ fontSize: '14px', color: '#6B7280' }}>
          New customer?{' '}
          <a href="/shop" style={{ color: '#00AB5F', fontWeight: '600' }}>Browse Laptops</a>
        </p>
      </div>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div style={{
      minHeight: '60vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', flexDirection: 'column', padding: '40px 20px', textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '120px', fontWeight: '800', color: '#E5E7EB', marginBottom: '0' }}>404</h1>
      <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Page Not Found</h2>
      <p style={{ color: '#6B7280', marginBottom: '24px', maxWidth: '400px' }}>
        The page you're looking for doesn't exist.
      </p>
      <a href="/" style={{
        padding: '12px 24px', background: '#00AB5F', color: 'white',
        borderRadius: '9999px', fontWeight: '600', textDecoration: 'none'
      }}>Back to Home</a>
    </div>
  );
}

export default App;
