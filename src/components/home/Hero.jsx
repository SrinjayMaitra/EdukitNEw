import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">India → Nigeria · IT Careers</div>
        <h1 className="hero-title">
          The Right Laptop.<br />
          <span className="hero-highlight">Delivered to Your Door.</span>
        </h1>
        <p className="hero-subtitle">
          We source affordable, reliable laptops from India and ship them directly to Nigeria — built for students and professionals entering the IT workforce.
        </p>
        <div className="hero-actions">
          <button className="hero-btn-primary" onClick={() => navigate('/shop')}>
            Browse Laptops →
          </button>
          <button className="hero-btn-secondary" onClick={() => navigate('/how-it-works')}>
            How It Works
          </button>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-number">$189</span>
            <span className="stat-label">Starting From</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">7–14</span>
            <span className="stat-label">Days Delivery</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">1 yr</span>
            <span className="stat-label">Warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
