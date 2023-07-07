import React from 'react';
import "../styling/itinerarytab.css"
import moment from "moment"

const ItineraryItem = ({ itin, onItineraryClick }) => {
  const handleItineraryEdit = () => {
    onItineraryClick(itin.id);
  };

  return (
    <div key={itin.id} className="itin-tab-item" onClick={handleItineraryEdit}>
      <div className="itin-tab-image-container">
        <img className="itin-tab-image" src={require("../test-images/" + itin.image)} alt={itin.title} />
      </div>
      <div className="itin-tab-content">
        <h3>{itin.title}</h3>
        <p style={{fontSize: 15}}><b>Dates: {formatDate(itin.startDate)} - {formatDate(itin.endDate)}</b></p>
        <p><b>{itin.duration}</b></p>
        <p>{itin.description}</p>
      </div>
    </div>
  );
};

const formatDate = (date) => {
  const utcOffsetMinutes = moment().utcOffset();
  const adjustedDate = moment(date).utcOffset(utcOffsetMinutes).format("MMMM Do, YYYY");
  return adjustedDate;
}

export default ItineraryItem;