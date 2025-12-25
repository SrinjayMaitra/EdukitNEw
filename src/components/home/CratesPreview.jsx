import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CrateCard from '../common/CrateCard';
import Button from '../common/Button';
import { crates, ageGroups } from '../../data/crates';
import './CratesPreview.css';

const CratesPreview = () => {
  const [selectedAge, setSelectedAge] = useState(null);

  const filteredCrates = selectedAge
    ? crates.filter(crate => {
        const [min, max] = crate.ageRange.split('-').map(n => parseInt(n) || 0);
        const [filterMin, filterMax] = selectedAge.split('-').map(n => parseInt(n) || 100);
        return min <= filterMax && (max >= filterMin || crate.ageRange.includes('+'));
      })
    : crates;

  return (
    <section className="crates-preview">
      <div className="container">
        <div className="section-header">
          <h2>Explore Our Crates</h2>
          <p>Hands-on projects designed for every age and interest</p>
        </div>

        {/* Age Filter Pills */}
        <div className="age-filter">
          <button
            className={`age-pill ${selectedAge === null ? 'active' : ''}`}
            onClick={() => setSelectedAge(null)}
          >
            All Ages
          </button>
          {ageGroups.map(group => (
            <button
              key={group.id}
              className={`age-pill ${selectedAge === group.id ? 'active' : ''}`}
              onClick={() => setSelectedAge(group.id)}
            >
              {group.label}
            </button>
          ))}
        </div>

        {/* Crates Grid */}
        <div className="crates-grid">
          {filteredCrates.map(crate => (
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
  );
};

export default CratesPreview;
