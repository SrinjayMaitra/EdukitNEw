import { ShieldCheck, Headphones, Truck } from 'lucide-react';
import Button from '../common/Button';
import './GiftBanner.css';

const trustPoints = [
  {
    icon: ShieldCheck,
    title: '1-Year Warranty',
    desc: 'Every laptop ships with a full 12-month hardware warranty. Remote support included.'
  },
  {
    icon: Truck,
    title: 'Customs Handled',
    desc: 'We manage all import paperwork and customs clearance. No hidden fees, no hassle for you.'
  },
  {
    icon: Headphones,
    title: 'After-Sale Support',
    desc: 'WhatsApp-based support team ready to help with setup, troubleshooting, and IT guidance.'
  }
];

const GiftBanner = () => {
  return (
    <section className="gift-banner">
      <div className="container">
        <div className="trust-header">
          <h2>Why Buy From Edukit?</h2>
          <p>We're not just a shop. We're a bridge between India's tech supply and Nigeria's IT workforce.</p>
        </div>
        <div className="trust-grid">
          {trustPoints.map((point, i) => (
            <div key={i} className="trust-card">
              <div className="trust-icon">
                <point.icon size={28} />
              </div>
              <h3>{point.title}</h3>
              <p>{point.desc}</p>
            </div>
          ))}
        </div>
        <div className="trust-cta">
          <Button to="/shop" variant="primary" size="lg">Shop Laptops</Button>
          <Button to="/about" variant="outline" size="lg">Our Story</Button>
        </div>
      </div>
    </section>
  );
};

export default GiftBanner;
