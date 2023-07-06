import React from "react";

const AddItineraryButton = ({ onAddItinerary }) => {
    const handleAddItinerary = () => {
        onAddItinerary();
    }
    return (
        <button onClick={handleAddItinerary}>Add Itinerary</button>
    );
}

export default AddItineraryButton;