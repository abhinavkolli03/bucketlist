import React, { useState } from 'react';
import '../styling/daytracker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const DayTrackerScreen = ({ itin, onClose }) => {
    const days = Object.keys(itin.days);
    const [activeDay, setActiveDay] = useState(days[0]);

    const handleClose = () => {
        onClose();
    }

    const handleNewDayButtonClick = (day) => {
        setActiveDay(day);
    }

    return (
        <div className="day-tracker-screen">
            <div className="day-tracker-header">
                <h1 className="day-tracker-title">{itin.title}</h1>
                <button className="day-tracker-close-button" onClick={handleClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <div className="day-tracker-buttons-container">
                {days.map((day) => (
                <button
                    key={day}
                    className={`day-tracker-button${activeDay === day ? " active" : ""}`}
                    onClick={() => handleNewDayButtonClick(day)}
                >
                    Day {day}
                </button>
                ))}
            </div>
            <div className="day-tracker-content">
                
            </div>
        </div>
    );
};

export default DayTrackerScreen;
