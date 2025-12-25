import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Check, ChevronDown, Package, Truck, RotateCcw, Shield } from 'lucide-react';
import Button from '../components/common/Button';
import FAQ from '../components/common/FAQ';
import Testimonials from '../components/common/Testimonials';
import { getCrateBySlug, crates } from '../data/crates';
import CrateCard from '../components/common/CrateCard';
import './CrateDetailPage.css';

const subscriptionPlans = [
  { id: 'monthly', label: 'Monthly', months: 1, discount: 0, popular: false },
  { id: '3-month', label: '3 Months', months: 3, discount: 5, popular: false },
  { id: '6-month', label: '6 Months', months: 6, discount: 10, popular: true },
  { id: '12-month', label: '12 Months', months: 12, discount: 15, popular: false }
];

const CrateDetailPage = () => {
  const { slug } = useParams();
  const crate = getCrateBySlug(slug);
  const [selectedPlan, setSelectedPlan] = useState('6-month');
  const [isSubscribing, setIsSubscribing] = useState(false);

  if (!crate) {
    return (
      <div className="crate-not-found">
        <div className="container">
          <h1>Crate Not Found</h1>
          <p>Sorry, we couldn't find the crate you're looking for.</p>
          <Button to="/crates" variant="primary">View All Crates</Button>
        </div>
      </div>
    );
  }

  const selectedPlanData = subscriptionPlans.find(p => p.id === selectedPlan);
  const discountedPrice = crate.price * (1 - selectedPlanData.discount / 100);
  const totalPrice = discountedPrice * selectedPlanData.months;

  const relatedCrates = crates.filter(c => c.id !== crate.id).slice(0, 3);

  const handleSubscribe = () => {
    setIsSubscribing(true);
    // Simulate subscription process
    setTimeout(() => {
      setIsSubscribing(false);
      alert('Subscription added to cart!');
    }, 1000);
  };

  return (
    <div className="crate-detail-page" style={{ '--crate-color': crate.color }}>
      {/* Hero Section */}
      <section className="crate-hero">
        <div className="container">
          <div className="crate-hero-grid">
            <div className="crate-images">
              <div className="main-image">
                <img src={crate.heroImage} alt={crate.name} />
                <span className="age-badge">Ages {crate.ageRange}</span>
              </div>
              <div className="thumbnail-row">
                <img src={crate.image} alt={`${crate.name} box`} />
                <img src={crate.heroImage} alt={`${crate.name} project`} />
                <img src={crate.image} alt={`${crate.name} materials`} />
              </div>
            </div>
            <div className="crate-info">
              <span className="crate-tagline">{crate.tagline}</span>
              <h1>{crate.name}</h1>
              <div className="crate-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={i < Math.floor(crate.reviews.rating) ? '#FACC15' : 'none'}
                      stroke="#FACC15"
                    />
                  ))}
                </div>
                <span className="rating-text">
                  {crate.reviews.rating} ({crate.reviews.count.toLocaleString()} reviews)
                </span>
              </div>
              <p className="crate-description">{crate.longDescription}</p>

              {/* Subscription Plans */}
              <div className="subscription-plans">
                <h3>Choose Your Plan</h3>
                <div className="plans-grid">
                  {subscriptionPlans.map(plan => (
                    <button
                      key={plan.id}
                      className={`plan-option ${selectedPlan === plan.id ? 'selected' : ''}`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {plan.popular && <span className="popular-badge">Most Popular</span>}
                      <span className="plan-label">{plan.label}</span>
                      {plan.discount > 0 && (
                        <span className="plan-discount">Save {plan.discount}%</span>
                      )}
                      <span className="plan-price">
                        ${(crate.price * (1 - plan.discount / 100)).toFixed(2)}/mo
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Summary */}
              <div className="price-summary">
                <div className="price-row">
                  <span>Price per month</span>
                  <span>${discountedPrice.toFixed(2)}</span>
                </div>
                <div className="price-row">
                  <span>{selectedPlanData.months} month{selectedPlanData.months > 1 ? 's' : ''} total</span>
                  <span className="total-price">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={handleSubscribe}
                disabled={isSubscribing}
              >
                {isSubscribing ? 'Adding to Cart...' : 'Subscribe Now'}
              </Button>

              <Link to="/gifts" className="gift-link">
                <Package size={18} />
                Give as a gift
              </Link>

              {/* Trust Badges */}
              <div className="trust-badges">
                <div className="trust-badge">
                  <Truck size={20} />
                  <span>Free Shipping</span>
                </div>
                <div className="trust-badge">
                  <RotateCcw size={20} />
                  <span>Cancel Anytime</span>
                </div>
                <div className="trust-badge">
                  <Shield size={20} />
                  <span>Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="whats-included">
        <div className="container">
          <h2>What's Included</h2>
          <div className="included-grid">
            {crate.includes.map((item, index) => (
              <div key={index} className="included-item">
                <Check size={24} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="crate-features">
        <div className="container">
          <h2>Why {crate.name}?</h2>
          <div className="features-list">
            {crate.features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-number">{String(index + 1).padStart(2, '0')}</div>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Related Crates */}
      <section className="related-crates">
        <div className="container">
          <h2>Explore Other Crates</h2>
          <div className="crates-grid">
            {relatedCrates.map(relatedCrate => (
              <CrateCard key={relatedCrate.id} crate={relatedCrate} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrateDetailPage;
