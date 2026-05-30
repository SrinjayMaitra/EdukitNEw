import { ShoppingCart, PackageCheck, Plane, Laptop, ShieldCheck, Headphones, MessageSquare } from 'lucide-react';
import Button from '../components/common/Button';
import FAQ from '../components/common/FAQ';
import './HowItWorksPage.css';

const steps = [
  {
    number: '01',
    icon: ShoppingCart,
    title: 'Browse & Order Online',
    description: 'Choose your laptop from our curated selection. Filter by budget, read the full specs, and place your order securely. We accept international cards, PayPal, and bank transfers.',
    details: [
      'Detailed specs on every listing',
      'Filter by budget category',
      'Secure international checkout',
      'Order confirmation via email'
    ]
  },
  {
    number: '02',
    icon: PackageCheck,
    title: 'Quality Check & Packing',
    description: 'Every laptop is inspected, tested, and carefully packaged at our India facility before shipping. Refurbished units get a full hardware diagnostic and cleaning.',
    details: [
      'Battery, keyboard, display, and port testing',
      'Professional packaging to prevent transit damage',
      'Sealed with tamper-evident wrapping',
      'Customs paperwork prepared'
    ]
  },
  {
    number: '03',
    icon: Plane,
    title: 'International Shipping',
    description: 'We ship via reliable international couriers with full tracking. All customs clearance between India and Nigeria is managed by our team — no surprise fees.',
    details: [
      'Full door-to-door tracking number provided',
      'Customs documentation handled',
      'Estimated delivery: 7–14 business days',
      'Free shipping on orders over $300'
    ]
  },
  {
    number: '04',
    icon: Laptop,
    title: 'Receive & Start Working',
    description: 'Your laptop arrives ready to use. Power it on, connect to the internet, and you\'re set. Our WhatsApp support team is available if you need setup help.',
    details: [
      'Pre-configured with essential software',
      '1-year hardware warranty included',
      'WhatsApp after-sale support',
      'IT career resources provided'
    ]
  }
];

const support = [
  {
    icon: ShieldCheck,
    title: '1-Year Warranty',
    desc: 'All hardware is covered for 12 months from the date of delivery. We coordinate repair or replacement.'
  },
  {
    icon: Headphones,
    title: 'Remote Support',
    desc: 'Can\'t figure something out? Our team on WhatsApp helps with setup, drivers, and troubleshooting.'
  },
  {
    icon: MessageSquare,
    title: 'IT Career Guidance',
    desc: 'We share resources, course recommendations, and remote job leads for Nigerian IT professionals.'
  }
];

const HowItWorksPage = () => {
  return (
    <div className="how-it-works-page">
      <section className="hiw-hero">
        <div className="container">
          <h1>How It Works</h1>
          <p>From your browser in Nigeria to a laptop at your door — a simple, transparent 4-step process.</p>
        </div>
      </section>

      <section className="hiw-steps">
        <div className="container">
          {steps.map((step, index) => (
            <div key={index} className={`hiw-step ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="step-content">
                <div className="step-number">{step.number}</div>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
                <ul className="step-details">
                  {step.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="step-icon-display">
                <step.icon size={80} strokeWidth={1.2} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="hiw-support">
        <div className="container">
          <h2>What Happens After Delivery</h2>
          <p>Our relationship doesn't end when the parcel arrives.</p>
          <div className="support-grid">
            {support.map((item, i) => (
              <div key={i} className="support-card">
                <item.icon size={32} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hiw-cta">
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>Browse our current selection and place your order today.</p>
          <Button to="/shop" variant="primary" size="lg">Browse Laptops →</Button>
        </div>
      </section>

      <FAQ />
    </div>
  );
};

export default HowItWorksPage;
