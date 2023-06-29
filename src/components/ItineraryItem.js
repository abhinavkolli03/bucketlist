import React from 'react';
import "../styling/itinerarytab.css"

const ItineraryItem = ({ itin, onItineraryClick }) => {
  const handleItineraryEdit = () => {
    onItineraryClick(itin.id);
  };

  return (
    <div className="itin-tab-item" onClick={handleItineraryEdit}>
      <div className="itin-tab-image-container">
        <img className="itin-tab-image" src={require("../test-images/" + itin.image)} alt={itin.title} />
      </div>
      <div className="itin-tab-content">
        <h3>{itin.title}</h3>
        <p>{itin.duration}</p>
        <p>{itin.description}</p>
      </div>
    </div>
  );
};

export default ItineraryItem;