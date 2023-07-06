import React, {useState} from 'react';
import ItineraryItem from './components/ItineraryItem';
import EditItineraryScreen from './screens/EditItineraryScreen'
import "./App.css"

import itinerariesData from './data/itineraries.js';
import AddItineraryButton from './components/AddItineraryButton';

const App = () => {
  const [isAddingItinerary, setIsAddingItinerary] = useState(false)
  const [itineraries, setItineraries] = useState(itinerariesData)

  const [selectedItinerary, setSelectedItinerary] = useState(null)
  const [isEditScreenVisible, setIsEditScreenVisible] = useState(false)

  const handleAddItinerary = () => {
    setIsAddingItinerary(true);
  }

  const handleItineraryClick = (itinId) => {
    console.log("help")
    const findItinerary = itineraries.find((itinerary) => itinerary.id === itinId)
    setSelectedItinerary(findItinerary)
    setIsEditScreenVisible(true)
    console.log("Itinerary clicked:", itinId)
  }

  const handleSavedItinerary = (updatedItin) => {
    const updatedItins = itineraries.map((itin) =>
      itin.id === updatedItin.id ? updatedItin : itin
    );
    setItineraries(updatedItins)
    setIsEditScreenVisible(false)
    console.log("Updated itinerary:", updatedItin)
  }

  const handleSaveNewItinerary = (newItin) => {
    const updatedItins = [...itineraries, newItin]
    setItineraries(updatedItins)
    setIsAddingItinerary(false)
  }

  const handleCloseEditScreen = () => {
    setSelectedItinerary(null)
    setIsEditScreenVisible(false)
    console.log("Closed editing of itinerary")
  }

  const name = 'Anish Palakurthi';

  return (
    <div className="app">
      <div className="header">
        <h1>Bucket List</h1>
      </div>
      <div className="header">
        <h1>Welcome back, {name}</h1>
        <p>Let's finish working on your Paris trip.</p>
      </div>
      <div className="tab-list">
        {itineraries.map((itin) => (
          <ItineraryItem key={itin.id} itin={itin} onItineraryClick={handleItineraryClick} />
        ))}
      </div>
      {isAddingItinerary && (
        <EditItineraryScreen 
          itin={null}
          onSavingItin={handleSaveNewItinerary}
          onClosingEdit={handleCloseEditScreen}
        />
      )}
      {isEditScreenVisible && (
        <EditItineraryScreen 
          itin={selectedItinerary}
          onSavingItin={handleSavedItinerary}
          onClosingEdit={handleCloseEditScreen}
        />
      )}
      <AddItineraryButton onAddItinerary={handleAddItinerary} />
    </div>
  );
};

export default App;

