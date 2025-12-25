import { useState } from 'react';
import { Gift, Heart, Sparkles, Check, Mail, Calendar, Package } from 'lucide-react';
import Button from '../components/common/Button';
import FAQ from '../components/common/FAQ';
import { crates } from '../data/crates';
import './GiftsPage.css';

const giftPlans = [
  { months: 1, label: '1 Month', discount: 0 },
  { months: 3, label: '3 Months', discount: 5 },
  { months: 6, label: '6 Months', discount: 10, popular: true },
  { months: 12, label: '12 Months', discount: 15 }
];

const giftFeatures = [
  {
    icon: Gift,
    title: 'Beautiful Gift Packaging',
    description: 'First crate arrives in special gift packaging with a personalized message.'
  },
  {
    icon: Calendar,
    title: 'Schedule Delivery',
    description: 'Choose the perfect delivery date for birthdays, holidays, or any occasion.'
  },
  {
    icon: Mail,
    title: 'Gift Notification',
    description: 'Send a beautiful digital announcement to the recipient on your chosen date.'
  },
  {
    icon: Package,
    title: 'Flexible Gifting',
    description: 'Gift 1-12 months of creative fun. They can extend anytime!'
  }
];

const occasions = [
  { name: 'Birthday', emoji: '🎂' },
  { name: 'Holiday', emoji: '🎄' },
  { name: 'Back to School', emoji: '📚' },
  { name: 'Just Because', emoji: '💝' },
  { name: 'Graduation', emoji: '🎓' },
  { name: 'Get Well', emoji: '🌸' }
];

const giftFaqs = [
  {
    id: 1,
    question: 'How do gift subscriptions work?',
    answer: 'Gift subscriptions are simple! Choose a crate line, select the number of months, and enter the recipient\'s information. You can schedule the first delivery for a specific date, and we\'ll send a beautiful gift notification to the recipient.'
  },
  {
    id: 2,
    question: 'Can I personalize the gift?',
    answer: 'Yes! You can include a personalized message that will be included with the first crate. You can also choose to send a digital gift announcement to the recipient on a date you specify.'
  },
  {
    id: 3,
    question: 'What if I don\'t know their address?',
    answer: 'No problem! You can send a gift notification that allows the recipient to enter their own address. This is perfect for surprise gifts or when you want to keep the delivery a surprise.'
  },
  {
    id: 4,
    question: 'Can the recipient extend their subscription?',
    answer: 'Absolutely! When the gift subscription ends, the recipient will receive an email with the option to continue their subscription at the regular rate.'
  },
  {
    id: 5,
    question: 'Do you offer gift cards?',
    answer: 'Yes! If you\'re not sure which crate to choose, gift cards let the recipient pick their perfect subscription. Gift cards are available in various amounts and never expire.'
  }
];

const GiftsPage = () => {
  const [selectedCrate, setSelectedCrate] = useState(crates[2]); // Default to Kiwi Crate
  const [selectedPlan, setSelectedPlan] = useState(6);

  const selectedPlanData = giftPlans.find(p => p.months === selectedPlan);
  const discountedPrice = selectedCrate.price * (1 - selectedPlanData.discount / 100);
  const totalPrice = discountedPrice * selectedPlan;

  return (
    <div className="gifts-page">
      {/* Hero Section */}
      <section className="gifts-hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">
              <Gift size={20} />
              The Gift That Keeps Giving
            </span>
            <h1>Give the Gift of Creativity & Discovery</h1>
            <p>
              Make any occasion special with an Edukit gift subscription.
              Inspire months of hands-on learning, creativity, and family fun.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <Sparkles size={24} />
                <span>50M+ crates delivered</span>
              </div>
              <div className="stat">
                <Heart size={24} />
                <span>4.9 star reviews</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="floating-gift gift-1">🎁</div>
          <div className="floating-gift gift-2">🎀</div>
          <div className="floating-gift gift-3">✨</div>
        </div>
      </section>

      {/* Gift Builder Section */}
      <section className="gift-builder">
        <div className="container">
          <h2>Build Your Perfect Gift</h2>
          <div className="builder-grid">
            {/* Step 1: Choose Crate */}
            <div className="builder-step">
              <div className="step-header">
                <span className="step-number">1</span>
                <h3>Choose a Crate</h3>
              </div>
              <div className="crate-selector">
                {crates.map(crate => (
                  <button
                    key={crate.id}
                    className={`crate-option ${selectedCrate.id === crate.id ? 'selected' : ''}`}
                    onClick={() => setSelectedCrate(crate)}
                    style={{ '--crate-color': crate.color }}
                  >
                    <span className="crate-dot"></span>
                    <div className="crate-info">
                      <span className="crate-name">{crate.name}</span>
                      <span className="crate-age">Ages {crate.ageRange}</span>
                    </div>
                    {selectedCrate.id === crate.id && <Check size={18} />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Duration */}
            <div className="builder-step">
              <div className="step-header">
                <span className="step-number">2</span>
                <h3>Choose Duration</h3>
              </div>
              <div className="plan-options">
                {giftPlans.map(plan => (
                  <button
                    key={plan.months}
                    className={`plan-option ${selectedPlan === plan.months ? 'selected' : ''}`}
                    onClick={() => setSelectedPlan(plan.months)}
                  >
                    {plan.popular && <span className="popular-tag">Most Popular</span>}
                    <span className="plan-months">{plan.label}</span>
                    {plan.discount > 0 && (
                      <span className="plan-discount">Save {plan.discount}%</span>
                    )}
                    <span className="plan-price">
                      ${(selectedCrate.price * (1 - plan.discount / 100) * plan.months).toFixed(2)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="builder-summary">
              <div className="summary-card" style={{ '--crate-color': selectedCrate.color }}>
                <div className="summary-header">
                  <Gift size={32} />
                  <h4>Gift Summary</h4>
                </div>
                <div className="summary-details">
                  <div className="summary-row">
                    <span>Crate:</span>
                    <span>{selectedCrate.name}</span>
                  </div>
                  <div className="summary-row">
                    <span>Duration:</span>
                    <span>{selectedPlan} month{selectedPlan > 1 ? 's' : ''}</span>
                  </div>
                  <div className="summary-row">
                    <span>Age Range:</span>
                    <span>{selectedCrate.ageRange}</span>
                  </div>
                  {selectedPlanData.discount > 0 && (
                    <div className="summary-row discount">
                      <span>Savings:</span>
                      <span>-${(selectedCrate.price * selectedPlan * selectedPlanData.discount / 100).toFixed(2)}</span>
                    </div>
                  )}
                  <div className="summary-row total">
                    <span>Total:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                <Button variant="primary" size="lg" fullWidth>
                  Continue to Personalize
                </Button>
                <p className="summary-note">
                  <Check size={14} /> Free shipping included
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="gift-occasions">
        <div className="container">
          <h2>Perfect for Every Occasion</h2>
          <div className="occasions-grid">
            {occasions.map((occasion, index) => (
              <div key={index} className="occasion-card">
                <span className="occasion-emoji">{occasion.emoji}</span>
                <span className="occasion-name">{occasion.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="gift-features">
        <div className="container">
          <h2>The Edukit Gift Experience</h2>
          <div className="features-grid">
            {giftFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <feature.icon size={28} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Card Section */}
      <section className="gift-card-section">
        <div className="container">
          <div className="gift-card-content">
            <div className="gift-card-info">
              <h2>Not Sure Which Crate?</h2>
              <p>
                Give the gift of choice! Edukit gift cards let the recipient
                pick the perfect crate for their interests and age.
              </p>
              <ul>
                <li><Check size={18} /> Available in any amount</li>
                <li><Check size={18} /> Never expires</li>
                <li><Check size={18} /> Delivered instantly via email</li>
                <li><Check size={18} /> Redeemable for any crate</li>
              </ul>
              <Button to="/gift-cards" variant="primary" size="lg">
                Buy a Gift Card
              </Button>
            </div>
            <div className="gift-card-image">
              <div className="gift-card-visual">
                <div className="card-design">
                  <Gift size={40} />
                  <span>Edukit Gift Card</span>
                  <span className="card-amount">$50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={giftFaqs} title="Gift FAQs" />

      {/* CTA Section */}
      <section className="gifts-cta">
        <div className="container">
          <h2>Ready to Give the Gift of Wonder?</h2>
          <p>Start building your perfect gift today!</p>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            variant="primary"
            size="lg"
          >
            Start Gifting
          </Button>
        </div>
      </section>
    </div>
  );
};

export default GiftsPage;
