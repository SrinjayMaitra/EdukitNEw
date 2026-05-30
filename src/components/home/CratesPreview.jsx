import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './CratesPreview.css';

const categories = [
  {
    id: 'budget',
    label: 'Budget',
    range: 'Under $250',
    description: 'Lightweight, dependable laptops for web browsing, email, and online learning.',
    color: '#2563EB',
    path: '/shop?category=budget'
  },
  {
    id: 'mid-range',
    label: 'Mid-Range',
    range: '$250 – $370',
    description: 'Faster processors and more storage — ideal for multitasking and productivity tools.',
    color: '#00AB5F',
    path: '/shop?category=mid-range'
  },
  {
    id: 'refurbished',
    label: 'Refurbished',
    range: 'Best Value',
    description: 'Certified pre-owned business laptops. Quality-tested, professionally restored.',
    color: '#7C3AED',
    path: '/shop?category=refurbished'
  }
];

const CratesPreview = () => {
  return (
    <section className="crates-preview">
      <div className="container">
        <div className="section-header">
          <h2>Shop by Budget</h2>
          <p>Every category is hand-picked for Nigerian students and professionals starting their IT journey</p>
        </div>

        <div className="crates-grid">
          {categories.map(cat => (
            <Link key={cat.id} to={cat.path} className="category-card" style={{ '--cat-color': cat.color }}>
              <div className="cat-header">
                <span className="cat-label">{cat.label}</span>
                <span className="cat-range">{cat.range}</span>
              </div>
              <p className="cat-desc">{cat.description}</p>
              <span className="cat-cta">
                View laptops <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CratesPreview;
