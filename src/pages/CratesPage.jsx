import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CrateCard from '../components/common/CrateCard';
import { crates, ageGroups, getCratesByAge } from '../data/crates';
import './CratesPage.css';

const CratesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const ageFilter = searchParams.get('age');
  const [selectedAge, setSelectedAge] = useState(ageFilter);

  const handleAgeChange = (age) => {
    setSelectedAge(age);
    if (age) {
      setSearchParams({ age });
    } else {
      setSearchParams({});
    }
  };

  const filteredCrates = selectedAge ? getCratesByAge(selectedAge) : crates;

  return (
    <div className="crates-page">
      {/* Hero Section */}
      <section className="crates-hero">
        <div className="container">
          <h1>Explore Our Crates</h1>
          <p>
            From babies to adults, we have the perfect subscription box for every
            curious mind. Choose a crate designed for your child's age and interests.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="crates-filter-section">
        <div className="container">
          <div className="filter-wrapper">
            <span className="filter-label">Filter by Age:</span>
            <div className="filter-pills">
              <button
                className={`filter-pill ${!selectedAge ? 'active' : ''}`}
                onClick={() => handleAgeChange(null)}
              >
                All Ages
              </button>
              {ageGroups.map(group => (
                <button
                  key={group.id}
                  className={`filter-pill ${selectedAge === group.id ? 'active' : ''}`}
                  onClick={() => handleAgeChange(group.id)}
                >
                  {group.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Crates Grid */}
      <section className="crates-grid-section">
        <div className="container">
          <div className="results-count">
            Showing {filteredCrates.length} crate{filteredCrates.length !== 1 ? 's' : ''}
          </div>
          <div className="crates-grid">
            {filteredCrates.map(crate => (
              <CrateCard key={crate.id} crate={crate} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="crates-features">
        <div className="container">
          <h2>Why Choose KiwiCo?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3>Expert-Designed Projects</h3>
              <p>Created by educators and tested by kids for maximum learning and fun.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              </div>
              <h3>Everything Included</h3>
              <p>All materials and easy-to-follow instructions in every crate.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3>Flexible Subscriptions</h3>
              <p>Pause, skip, or cancel anytime. No commitment required.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Quality Guaranteed</h3>
              <p>Premium, safe materials and 100% satisfaction guarantee.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CratesPage;
