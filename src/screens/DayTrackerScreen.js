import React from 'react';
import '../styling/daytracker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const DayTrackerScreen = ({ itineraryId, onClose }) => {
  const handleClose = () => {
    onClose();
  }

  return (
    <div className="day-tracker-screen">
      <div className="day-tracker-content">
        <button className="day-tracker-close" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};

export default DayTrackerScreen;
