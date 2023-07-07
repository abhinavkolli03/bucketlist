import React, { useState, useEffect } from "react";
import "../styling/itineraryedit.css"
import placeholderImage from "../test-images/placeholder.jpg"

const EditItineraryScreen = ({ itin, onSavingItin, onClosingEdit }) => {
    //we will need to update more metadata here later on if we want more on the screen
    const [imageFile, setImageFile] = useState("placeholder.jpg")
    const [imageChecker, setImageChecker] = useState(true)
    const [title, setTitle] = useState("")
    const [duration, setDuration] = useState("")
    const [description, setDescription] = useState("")
    const [thoughtBubble, setThoughtBubble] = useState("")
    
    //errors states
    const [titleError, setTitleError] = useState("");
    const [durationError, setDurationError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");

    //update content with useEffect if itin exists
    useEffect(() => {
        if (itin) {
            setTitle(itin.title);
            setDuration(itin.duration);
            setDescription(itin.description);
            setThoughtBubble(itin.thoughtBubble);
            setImageFile(itin.image);
        }
    }, [itin]);

    //creating new saved itinerary and storing data back in passed function
    const handleItinSave = () => {
        //error checking
        if (title.trim() === "") {
            setTitleError("Please enter a title");
        }
        if (description.trim() === "") {
            setDescriptionError("Please enter a description");
        }
        if (duration.trim() === "") {
            setDurationError("Please enter a duration");
        }
        if(titleError || descriptionError || durationError) {
            return
        }
        if (!imageChecker) {
            return;
        }
        const newItin = {
            ...itin,
            id: itin ? itin.id : Date.now(),
            title: title,
            duration: duration,
            description: description,
            thoughtBubble: thoughtBubble,
            image: imageFile,
        };

        console.log(newItin.image)

        if (itin) {
            newItin.image = imageFile || itin.image;
        }

        onSavingItin(newItin)
        onClosingEdit()
    }

    //all the editing features for handling textarea changes
    //and saving it to their respective const

    const handleImageChange = (e) => {
        const newImage = e.target.value.trim();
        setImageFile(newImage)
        const imageExists = isValidImage(newImage)
        setImageChecker(imageExists)
    }

    const isValidImage = (newImage) => {
        try {
            const images = require.context('../test-images', false, /\.(png|jpe?g|gif|svg)$/);
            const imageExists = images.keys().some((key) => key === `./${newImage}`);
            return imageExists;
        } catch (error) {
            return false;
        }
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
        setTitleError("");
    }

    const handleDurationChange = (e) => {
        setDuration(e.target.value)
        setDurationError("")
    }
    
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
        setDescriptionError("")
    }
    
    const handleThoughtBubbleChange = (e) => {
        setThoughtBubble(e.target.value)
    }

    return (
        <div className="edit-itin-screen">
            <div className="edit-itin-header">
                <img className="edit-itin-screen-image"
                    src={itin && itin.image ? require("../test-images/" + itin.image) : placeholderImage}
                    alt={itin && itin.title}
                />            
            </div>
            <div className="edit-itin-screen-content">
                <div className="input-container">
                    <input
                        className="edit-itin-screen-input"
                        type="text"
                        value={imageFile}
                        onChange={handleImageChange}
                        placeholder="Image URL"
                    />
                    {!imageChecker && <p className="error-message">Invalid image name</p>}
                </div>
                <div className="input-container">
                    <input 
                        className="edit-itin-screen-input"
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="Itinerary Title"
                    />
                    {titleError && <p className="error-message">{titleError}</p>}
                </div>
                <div className="input-container">
                    <input 
                        className="edit-itin-screen-input"
                        type="text"
                        value={duration}
                        onChange={handleDurationChange}
                        placeholder="Duration"
                    />
                    {durationError && <p className="error-message">{durationError}</p>}
                </div>
                <div className="input-container">
                    <textarea 
                        className="edit-itin-screen-input"
                        type="text"
                        value={description}
                        onChange={handleDescriptionChange}
                        placeholder="Description"
                    />
                    {console.log(descriptionError)}
                    {descriptionError && <p className="error-message">{descriptionError}</p>}
                </div>
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