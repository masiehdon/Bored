import { useState } from 'react';
import Button from './components/Button';
import DropDown from './components/DropDown';
import Footer from './components/footer';  
import './App.css';

function App() {
  const [activities, setActivities] = useState([]);
  const [category, setCategory] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  async function fetchActivities(selectedCategory) {
    try {
      const url = selectedCategory
        ? `https://www.boredapi.com/api/activity?type=${selectedCategory}`
        : `https://www.boredapi.com/api/activity/`;
      
      const response = await fetch(url);
      const data = await response.json();
      setActivities(data.activity);
      console.log(data);
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  }

  function handleButtonClick() {
    fetchActivities(category);
    setIsClicked(true);
    console.log(category);
  }

  return (
    <div className="app-container">
      <header>
        <h1>Activity Generator</h1>
      </header>
      <main>
        <DropDown onSetCategory={setCategory} />
        <h1>{activities}</h1>
        <h2>{category}</h2>
        <Button OnHandleButtonClick={handleButtonClick} category={category}>
          {isClicked ? "Get a New Idea" : "Feeling Bored Again?"}
        </Button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
