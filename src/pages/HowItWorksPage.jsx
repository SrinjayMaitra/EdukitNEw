import { Link } from 'react-router-dom';
import { Package, Lightbulb, Smile, Repeat, Check, ArrowRight, Play } from 'lucide-react';
import Button from '../components/common/Button';
import FAQ from '../components/common/FAQ';
import { crates } from '../data/crates';
import CrateCard from '../components/common/CrateCard';
import './HowItWorksPage.css';

const steps = [
  {
    number: '01',
    icon: Package,
    title: 'Choose Your Crate',
    description: 'Browse our selection of crate lines designed for different ages and interests. From science to art, engineering to geography, there\'s a perfect crate for every curious mind.',
    details: [
      'Crates designed for ages 0-104',
      'Multiple interest areas to explore',
      'Expert-designed curriculum',
      'Age-appropriate activities'
    ]
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Select Your Plan',
    description: 'Choose a subscription plan that works for you. Whether you want to try it out monthly or save with a longer commitment, we\'ve got flexible options.',
    details: [
      'Monthly, 3, 6, or 12-month plans',
      'Save up to 15% with longer plans',
      'Cancel or pause anytime',
      'Free shipping on all subscriptions'
    ]
  },
  {
    number: '03',
    icon: Smile,
    title: 'Unbox the Magic',
    description: 'Every month, a new crate arrives at your door packed with everything needed for 2-3 hands-on projects. All materials, instructions, and inspiration included!',
    details: [
      'All materials included',
      'Easy-to-follow instructions',
      'Educational magazine',
      'Extra activity ideas'
    ]
  },
  {
    number: '04',
    icon: Repeat,
    title: 'Create, Learn, Repeat',
    description: 'Build together, learn together, and watch confidence grow with each completed project. The best part? A new adventure arrives every month!',
    details: [
      'Quality family time',
      'Screen-free learning',
      'Build real-world skills',
      'Celebrate achievements'
    ]
  }
];

const benefits = [
  {
    title: 'Expert-Designed Projects',
    description: 'Every project is created by educators and tested by real kids.'
  },
  {
    title: 'All Materials Included',
    description: 'No last-minute store runs. Everything you need is in the box.'
  },
  {
    title: 'Flexible Subscriptions',
    description: 'Pause, skip, or cancel anytime. No commitments, no hassles.'
  },
  {
    title: 'Free Shipping',
    description: 'All subscriptions include free shipping within the US.'
  },
  {
    title: 'Satisfaction Guaranteed',
    description: 'Not happy with a crate? We\'ll make it right, guaranteed.'
  },
  {
    title: 'Screen-Free Fun',
    description: 'Hands-on activities that inspire creativity away from screens.'
  }
];

const HowItWorksPage = () => {
  return (
    <div className="how-it-works-page">
      {/* Hero Section */}
      <section className="hiw-hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1>How Edukit Works</h1>
              <p>
                Getting started with Edukit is easy. In just a few simple steps,
                you'll unlock a world of hands-on learning and creative fun for
                your family.
              </p>
              <Button to="/crates" variant="primary" size="lg">
                Get Started <ArrowRight size={20} />
              </Button>
            </div>
            <div className="hero-visual">
              <div className="video-placeholder">
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600"
                  alt="Kids enjoying Edukit"
                />
                <button className="play-btn">
                  <Play size={32} fill="white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="hiw-steps">
        <div className="container">
          {steps.map((step, index) => (
            <div key={index} className={`step-row ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="step-content">
                <span className="step-number">{step.number}</span>
                <div className="step-icon">
                  <step.icon size={32} />
                </div>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
                <ul className="step-details">
                  {step.details.map((detail, i) => (
                    <li key={i}>
                      <Check size={18} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="step-image">
                <img
                  src={`https://images.unsplash.com/photo-${
                    ['1503454537195-1dcabb73ffb9', '1588072432836-e10032774350', '1581092160562-40aa08e78837', '1513364776144-60967b0f800f'][index]
                  }?w=600`}
                  alt={step.title}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="hiw-benefits">
        <div className="container">
          <h2>Why Families Love Edukit</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <Check size={24} />
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crates Preview */}
      <section className="hiw-crates">
        <div className="container">
          <h2>Find Your Perfect Crate</h2>
          <p className="crates-intro">
            Choose from our collection of crate lines, each designed for specific ages and interests.
          </p>
          <div className="crates-grid">
            {crates.slice(0, 3).map(crate => (
              <CrateCard key={crate.id} crate={crate} />
            ))}
          </div>
          <div className="crates-cta">
            <Button to="/crates" variant="outline" size="lg">
              View All Crates <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA */}
      <section className="hiw-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Start Your Adventure?</h2>
            <p>
              Join over 50 million kids and families who have discovered
              the joy of hands-on learning with Edukit.
            </p>
            <Button to="/crates" variant="primary" size="lg">
              Get Your First Crate
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
