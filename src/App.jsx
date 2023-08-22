import { useState } from 'react';
import Button from './components/Button';
import './App.css'
import Categories from './components/Categories';

function App() {
  const [activities, setActivities] = useState([])
  const [category, setCategory] = useState([])
  const [isClicked, setIsClicked] = useState(false);


  async function fetchActivities(selectedCategory) {
    try {
      const url = selectedCategory
        ? `https://www.boredapi.com/api/activity?type=${selectedCategory}`
        : `https://www.boredapi.com/api/activity/`

      const response = await fetch(url);
      const data = await response.json();
      
      setActivities(data.activity)
     
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  }
  
  

  function handleButtonClick() {
    fetchActivities(category)
    setIsClicked(true)
    console.log(category)
  }

  return (
  <>
      <div className="top-nav"><a href="" target="_blank">about bored</a></div>
      <div className="header">
        <h1>Bored?</h1>
        <h2>Casual & Daily Activities</h2>
        <p className="ingress">Get ideas for activites. Click on a button.</p>
     </div>

      <Categories onSetCategory={setCategory}/>
      <h1>{activities}</h1>
      <h2>{category}</h2>
      {/* Passing down fetchActivities function as props to Button component */}
      <Button
        OnHandleButtonClick={handleButtonClick}
        category={category}
      >
        {isClicked ? "Get a New Idea" : "Feeling Bored Again?"}
      </Button>
    </>
  )
}

export default App

