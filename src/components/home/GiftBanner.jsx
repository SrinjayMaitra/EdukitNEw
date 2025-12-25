import { Gift, Heart, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import './GiftBanner.css';

const GiftBanner = () => {
  return (
    <section className="gift-banner">
      <div className="container">
        <div className="gift-content">
          <div className="gift-text">
            <div className="gift-badge">
              <Gift size={20} />
              Perfect Gift
            </div>
            <h2>Give the Gift of Creativity</h2>
            <p>
              Looking for a gift that keeps on giving? Edukit gift subscriptions
              deliver months of hands-on fun, learning, and quality time.
            </p>
            <div className="gift-banner-features">
              <div className="gift-banner-feature-item">
                <Heart size={20} />
                <span>Personalized gift message included</span>
              </div>
              <div className="gift-banner-feature-item">
                <Sparkles size={20} />
                <span>Choose 1, 3, 6, or 12 month plans</span>
              </div>
            </div>
            <div className="gift-actions">
              <Button to="/gifts" variant="white" size="lg">
                Shop Gift Subscriptions
              </Button>
              <Button to="/gift-cards" variant="outline" size="lg" className="btn-ghost">
                Gift Cards
              </Button>
            </div>
          </div>
          <div className="gift-visual">
            <div className="gift-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600"
                alt="Gift wrapped Edukit box"
              />
              <div className="gift-decoration gift-star">
                <Sparkles size={32} />
              </div>
              <div className="gift-decoration gift-heart">
                <Heart size={28} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftBanner;
