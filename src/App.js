import React from 'react';
import ItineraryItem from './components/ItineraryItem';

const tabs = [
  {
    id: 1,
    image: "portugal.jpg",
    title: "Pondering Portugal",
    duration: "3 days",
    description: "What is Portugal famous for? Wine, for sure; this is where you'll find some of the oldest wine-growing regions in the world. In fact, two of Portugal's wine-growing regions, the Douro Valley and Pico Island in the Azores, are protected as UNESCO World Heritage Sites.",
  },
  {
    id: 2,
    image: "spain.jpg",
    title: "Strolling through Spain",
    duration: "2 weeks",
    description: "Spain is cool",
  },
  {
    id: 3,
    image: "canada.jpg",
    title: "Canadian Cruise",
    duration: "1 week",
    description: "Maple syrup is yum.",
  },
  {
    id: 4,
    image: "amazon.jpg",
    title: "Trekking The Amazon Trees",
    duration: "1 month",
    description: "This will be a long voyage.",
  },
  {
    id: 5,
    image: "date.jpg",
    title: "Little Elm First Date Plans",
    duration: "4 hours",
    description: "You will definitely bag her with this.",
  },
];

const App = () => {
  const name = 'Anish Palakurthi';

  return (
    <div className="app">
      <div className="header">
        <h1>Welcome back, {name}</h1>
        <p>Let's finish working on your Paris trip.</p>
      </div>
      <div className="tab-list">
        {tabs.map(tab => (
          <ItineraryItem key={tab.id} tab={tab} />
        ))}
      </div>
    </div>
  );
};

export default App;

