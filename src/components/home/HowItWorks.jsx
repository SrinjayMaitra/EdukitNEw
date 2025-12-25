import { Package, Lightbulb, Smile, Repeat } from 'lucide-react';
import Button from '../common/Button';
import './HowItWorks.css';

const steps = [
  {
    icon: Package,
    number: '01',
    title: 'Choose Your Crate',
    description: 'Select the perfect crate based on your child\'s age and interests. We have options for every curious mind!'
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Receive Monthly Magic',
    description: 'Every month, a new crate arrives at your door with all materials and instructions for hands-on projects.'
  },
  {
    icon: Smile,
    number: '03',
    title: 'Create & Learn Together',
    description: 'Spend quality time building, creating, and learning. Watch your child\'s confidence and creativity grow!'
  },
  {
    icon: Repeat,
    number: '04',
    title: 'Repeat the Wonder',
    description: 'Each month brings new discoveries. Pause, skip, or cancel anytime with our flexible subscription.'
  }
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Getting started is easy - here's what to expect</p>
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
