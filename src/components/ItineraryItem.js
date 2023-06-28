import React from 'react';

const ItineraryItem = ({ tab }) => {
  return (
    <div className="tab-item">
      <div className="tab-image-container">
        <img className="tab-image" src={require("../test-images/" + tab.image)} alt={tab.title} />
      </div>
      <div className="tab-content">
        <h3>{tab.title}</h3>
        <p style={{fontSize: "1rem"}}>{tab.duration}</p>
        <p>{tab.description}</p>
      </div>
    </div>
  );
};

export default ItineraryItem;