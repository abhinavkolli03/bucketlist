import React, {useState} from 'react';
import '../styling/daytracker.css';
import { FaTimes } from 'react-icons/fa';

const DayTrackerScreen = ({ itin, onClose }) => {
    const days = Object.keys(itin.days);
    const [activeDay, setActiveDay] = useState(days[0])

    const handleClose = () => {
        onClose()
    }

    const handleNewDayButtonClick = (day) => {
        setActiveDay(day)
    }

    return (
        <div className="day-tracker-screen">
            <div className="day-tracker-content">
                <h1 className="day-tracker-title">{itin.title}</h1>
                <button className="day-tracker-close-button" onClick={handleClose}>
                    <FaTimes />
                </button>
            </div>
            <div className="day-tracker-buttons-container">
                <button
                    className={`day-tracker-button${activeDay === "overview" ? " active" : ""}`}
                    onClick={() => handleNewDayButtonClick("overview")}
                >
                    Overview
                </button>
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
                {/* Content for the selected day */}
            </div>
        </div>
    );
};

export default DayTrackerScreen;
