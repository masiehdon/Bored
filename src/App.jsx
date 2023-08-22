import { useState, useEffect } from 'react';
import Heart from "react-animated-heart";
import Button from './components/Button';
import DropDown from './components/DropDown';
import './App.css'
import Favorites from './components/Favorites';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [activities, setActivities] = useState([])
  const [category, setCategory] = useState([])
  const [isClicked, setIsClicked] = useState(false);
  const [fav, setFav] = useState([])
   const [isClick, setClick] = useState(false);

  const uniqueId = uuidv4(); 

  async function fetchActivities(selectedCategory) {
    try {
      const url = selectedCategory
        ? `https://www.boredapi.com/api/activity?type=${selectedCategory}`
        : `https://www.boredapi.com/api/activity/`
      
  const response = await fetch(url);
    const data = await response.json();
       setActivities(data.activity)
    console.log(data);
  } catch (error) {
  console.error("Error fetching activities:", error);
}
}


  function fetchRandomActivity() {
    fetch('http://www.boredapi.com/api/activity/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
  }
  

  function handleButtonClick() {
    fetchActivities(category)
    setIsClicked(true)
    setClick(false)
    
   }

  

  
  function HandleSaveFav(activities) {
  if (isClick) {
    const newFavList = fav.filter(item => item.activity !== activities);
    setFav(newFavList);
  } else {
    const newFav = { id: uniqueId, activity: activities };
    setFav(currentFav => [...currentFav, newFav]);
  }
  
  setClick(isClick => !isClick);
}

  
   useEffect(() => {
    console.log('Favorites updated:', fav);
  }, [fav]);

  return (
    <>
      <DropDown
        onSetCategory = {setCategory}
      />
      <h1>{activities}</h1>
      {isClicked && 
        <Heart isClick={isClick} onClick={() => HandleSaveFav(activities)} />
      }
      <h2>{ category }</h2>
      {/* Passing down fetchActivities function as props to Button component */}
      <Button
        OnHandleButtonClick={handleButtonClick}
        category={category}
      >
        {isClicked ? "Get a New Idea" : "Feeling Bored Again?"}
      </Button>
      <Favorites fav={fav} />
      
    </>
  )
}

export default App

