import { useState } from 'react';
import Heart from "react-animated-heart";
import Button from './components/Button';
import DropDown from './components/DropDown';
import './App.css'
import Favorites from './components/Favorites';

function App() {
  const [activities, setActivities] = useState([])
  const [category, setCategory] = useState([])
  const [isClicked, setIsClicked] = useState(false);
  const [fav, setFav] = useState([])
   const [isClick, setClick] = useState(false);

  
  async function fetchActivities(selectedCategory) {
    try {
      const url = selectedCategory
        ? `https://www.boredapi.com/api/activity?type=${selectedCategory}`
        : `https://www.boredapi.com/api/activity/`
      
  const response = await fetch(url);
    const data = await response.json();
    // const activity = data.activity
    setActivities(data.activity)
    console.log(data);
  } catch (error) {
  console.error("Error fetching activities:", error);
}
}


  function handleButtonClick() {
    fetchActivities(category)
    setIsClicked(true)
    setClick(false)
    console.log('fav: ', fav)
   }

  function HandleSaveFav(activities) {
    {!isClick && setFav(currentFav => [...currentFav, activities])}
   setClick(isClick=>!isClick)
    console.log('fav: ', fav)
      }

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
      <Favorites
        fav={fav}
        setFav= { setFav }
      />
      
    </>
  )
}

export default App

