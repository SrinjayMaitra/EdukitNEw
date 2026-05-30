import { ShoppingCart, PackageCheck, Plane, Laptop } from 'lucide-react';
import Button from '../common/Button';
import './HowItWorks.css';

const steps = [
  {
    icon: ShoppingCart,
    number: '01',
    title: 'Pick Your Laptop',
    description: 'Browse our curated selection of affordable, work-ready laptops. Filter by budget and read full specs before you buy.'
  },
  {
    icon: PackageCheck,
    number: '02',
    title: 'We Pack & Quality Check',
    description: 'Every unit is tested, cleaned, and carefully packaged at our India facility before it leaves for Nigeria.'
  },
  {
    icon: Plane,
    number: '03',
    title: 'Shipped to Nigeria',
    description: 'We handle all customs documentation and international logistics. You get a tracking number the moment it ships.'
  },
  {
    icon: Laptop,
    number: '04',
    title: 'Start Working',
    description: 'Your laptop arrives in 7–14 days, ready to use. All units include a 1-year warranty and after-sale support.'
  }
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>From India to your hands in Nigeria — a simple, transparent process</p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-icon-wrapper">
                <step.icon size={32} />
                <span className="step-number">{step.number}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>

        <div className="how-cta">
          <Button to="/how-it-works" variant="primary" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
