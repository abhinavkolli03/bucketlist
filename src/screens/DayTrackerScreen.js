import React, {useState} from 'react';
import '../styling/daytracker.css';
import { FaTimes } from 'react-icons/fa';

const DayTrackerScreen = ({ itin, onClose }) => {
    return (
        <div className="day-tracker-screen">
            <div className="day-tracker-content">
                <button className="day-tracker-close-button" onClick={onClose}>
                    <FaTimes />
                </button>
                <h1 className="day-tracker-title">{itin.title}</h1>
            </div>
        </div>
    );
};

export default DayTrackerScreen;
