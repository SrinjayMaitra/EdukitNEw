import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import './CrateCard.css';

const CrateCard = ({ crate, variant = 'default' }) => {
  const {
    name,
    tagline,
    ageRange,
    description,
    color,
    price,
    image,
    reviews,
    slug
  } = crate;

  if (variant === 'compact') {
    return (
      <Link
        to={`/crates/${slug}`}
        className="crate-card compact"
        style={{ '--crate-color': color }}
      >
        <div className="crate-card-image">
          <img src={image} alt={name} loading="lazy" />
        </div>
        <div className="crate-card-content">
          <h3>{name}</h3>
          <span className="crate-age">Ages {ageRange}</span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/crates/${slug}`}
      className="crate-card"
      style={{ '--crate-color': color }}
    >
      <div className="crate-card-image">
        <img src={image} alt={name} loading="lazy" />
        <div className="crate-card-overlay">
          <span className="view-crate">
            View Crate <ArrowRight size={16} />
          </span>
        </div>
      </div>
      <div className="crate-card-content">
        <span className="crate-tagline">{tagline}</span>
        <h3>{name}</h3>
        <p className="crate-age">Ages {ageRange}</p>
        <p className="crate-description">{description}</p>
        <div className="crate-meta">
          <div className="crate-rating">
            <Star size={14} fill="#FACC15" stroke="#FACC15" />
            <span>{reviews.rating}</span>
            <span className="review-count">({reviews.count.toLocaleString()} reviews)</span>
          </div>
          <span className="crate-price">From ${price.toFixed(2)}/mo</span>
        </div>
      </div>
      <div className="crate-card-accent"></div>
    </Link>
  );
};

export default CrateCard;
