import { ageGroups } from '../../data/crates';
import './AgeSelector.css';

const AgeSelector = ({ selectedAge, onSelectAge }) => {
  return (
    <div className="age-selector">
      <h3 className="age-selector-title">Shop by Age</h3>
      <div className="age-buttons">
        {ageGroups.map((group) => (
          <button
            key={group.id}
            className={`age-button ${selectedAge === group.id ? 'active' : ''}`}
            onClick={() => onSelectAge(group.id)}
          >
            <span className="age-range">{group.label}</span>
            <span className="age-description">{group.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AgeSelector;
