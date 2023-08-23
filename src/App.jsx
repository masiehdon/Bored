import { useState, useEffect } from 'react';
import Button from './components/Button';
import Heart from "react-animated-heart";
import { v4 as uuidv4 } from 'uuid';
import Categories from './components/Categories';
import './App.css'

function App() {
  const [activities, setActivities] = useState({
    activity: '',
    participants: 0,
    price: 0
  })
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
      
      setActivities({
      activity: data.activity,
      participants: data.participants,
      price: data.price
    })
     
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  }
  
  

  function handleButtonClick() {
    fetchActivities(category)
    setIsClicked(true)
    setClick(false)
    console.log(category)
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
      <div className="top-nav">
        <a href="" target="_blank">about bored</a>
      </div>
      <div className="header">
        <h1>Bored?</h1>
        <h2>Casual & Daily Activities</h2>
        <p className="ingress">Get ideas for activites. Click on a button.</p>
     </div>

      <Categories onSetCategory={setCategory}/>
      <h1>{activities.activity}</h1>
      {isClicked &&
        <Heart isClick={isClick} onClick={() => HandleSaveFav(activities)} />}
    <p>Participants: {activities.participants}</p>
    <p>Price: {activities.price}</p>
     
     
      

      <h2>{category}</h2>
      
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

