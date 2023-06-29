import React, {useState} from 'react';
import ItineraryItem from './components/ItineraryItem';
import EditScreen from './screens/EditItineraryScreen'
import "./App.css"

const App = () => {
  const [itineraries, setItineraries] = useState([
    {
      id: 1,
      image: "portugal.jpg",
      title: "Pondering Portugal",
      duration: "3 days",
      description: "What is Portugal famous for? Wine, for sure; this is where you'll find some of the oldest wine-growing regions in the world. In fact, two of Portugal's wine-growing regions, the Douro Valley and Pico Island in the Azores, are protected as UNESCO World Heritage Sites.",
      thoughtBubble: "This was an interesting trip to say the least."
    },
    {
      id: 2,
      image: "spain.jpg",
      title: "Strolling through Spain",
      duration: "2 weeks",
      description: "Spain is cool",
      thoughtBubble: "I don't like spaniards!"
    },
    {
      id: 3,
      image: "canada.jpg",
      title: "Canadian Cruise",
      duration: "1 week",
      description: "Maple syrup is yum.",
      thoughtBubble: "Cute ride ;)"
    },
    {
      id: 4,
      image: "amazon.jpg",
      title: "Trekking The Amazon Trees",
      duration: "1 month",
      description: "This will be a long voyage.",
      thoughtBubble: "I love working for amazon but the trees."
    },
    {
      id: 5,
      image: "date.jpg",
      title: "Little Elm First Date Plans",
      duration: "4 hours",
      description: "You will definitely bag her with this.",
      thoughtBubble: "I will say this worked 10/10."
    },
  ])

  const [selectedItinerary, setSelectedItinerary] = useState(null)
  const [isEditScreenVisible, setIsEditScreenVisible] = useState(false)

  const handleItineraryClick = (itenId) => {
    console.log("help")
    const findItinerary = itineraries.find((itinerary) => itinerary.id === itenId)
    setSelectedItinerary(findItinerary)
    setIsEditScreenVisible(true)
    console.log("Itinerary clicked:", itenId)
  }

  const handleSavedItinerary = (updatedIten) => {
    const updatedItens = itineraries.map((iten) =>
      iten.id === updatedIten.id ? updatedIten : iten
    );
    setItineraries(updatedItens)
    setIsEditScreenVisible(false)
    console.log("Updated itinerary:", updatedIten)
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
      {isEditScreenVisible && (
        <EditScreen 
          itin={selectedItinerary}
          onSavingItin={handleSavedItinerary}
          onClosingEdit={handleCloseEditScreen}
        />
      )}
    </div>
  );
};

export default App;

