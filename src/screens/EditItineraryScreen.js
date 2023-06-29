import React, { useState } from "react";
import "../styling/itineraryedit.css"

const EditItineraryScreen = ({ itin, onSavingItin, onClosingEdit }) => {
    //we will need to update more metadata here later on if we want more on the screen
    const [title, setTitle] = useState(itin.title)
    const [duration, setDuration] = useState(itin.duration)
    const [description, setDescription] = useState(itin.description)
    const [thoughtBubble, setThoughtBubble] = useState(itin.thoughtBubble)

    //creating new saved itinerary and storing data back in passed function

    const handleItinSave = () => {
        const newItin = {
            ...itin,
            title: title,
            duration: duration,
            description: description,
            thoughtBubble: thoughtBubble,
        };
        onSavingItin(newItin)
        onClosingEdit()
    }

    //all the editing features for handling textarea changes
    //and saving it to their respective const

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleDurationChange = (e) => {
        setDuration(e.target.value)
    }
    
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    
    const handleThoughtBubbleChange = (e) => {
        setThoughtBubble(e.target.value)
    }

    return (
        <div className="edit-itin-screen">
            <div className="edit-itin-header">
                <img className="edit-itin-screen-image" src={require("../test-images/" + itin.image)} alt={itin.title} />
            </div>
            <div className="edit-itin-screen-content">
                <input 
                    className="edit-itin-screen-input"
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Itinerary Title"
                />
                <input 
                    className="edit-itin-screen-input"
                    type="text"
                    value={duration}
                    onChange={handleDurationChange}
                    placeholder="Duration"
                />
                <textarea 
                    className="edit-itin-screen-input"
                    type="text"
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder="Description"
                />
                <textarea 
                    className="edit-itin-screen-input"
                    type="text"
                    value={thoughtBubble}
                    onChange={handleThoughtBubbleChange}
                    placeholder="Thought Bubble"
                />
            </div>
            <div className="edit-itin-footer">
                <button className="edit-itin-screen-button" onClick={handleItinSave}>
                    Save
                </button>
                <button className="edit-itin-screen-button" onClick={onClosingEdit}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default EditItineraryScreen