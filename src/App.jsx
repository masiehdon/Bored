import { useState, useEffect } from 'react';
import Button from './components/Button';
import { v4 as uuidv4 } from 'uuid';
import Categories from './components/Categories';
import './App.css'
import Favorites from './components/Favorites';
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";

function App() {
  const [activities, setActivities] = useState({
    activity: '',
    participants: 0,
    price: 0
  })
  const [category, setCategory] = useState([])
  const [isClicked, setIsClicked] = useState(false);
  const [fav, setFav] = useState([])
  const [active, setActive] = useState(false)
  
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
   setActive(true)
    console.log(category)
  }

   function HandleSaveFav(activities) {
  if (active) {
    const newFavList = fav.filter(item => item.activity !== activities);
    setFav(newFavList);
  } else {
    const newFav = { id: uniqueId, activity: activities };
    setFav(currentFav => [...currentFav, newFav]);
  }
  
  setActive(curr => !curr);
}

  
  function handleSelectFavorites() {
    return fav
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


{/* 
      <button onClick={() => HandleSaveFav(activities)}>
  {!active ? "Remove from Favorites" : "Save as Favorite"}
</button> */}

      
    <p>Participants: {activities.participants}</p>
    <p>Price: {activities.price}</p>
    <h2>{category}</h2>
      <Favorites onHandleSelectFavorites={handleSelectFavorites} fav={fav} />
      <Button
        OnHandleButtonClick={handleButtonClick}
        category={category}
      >
        {isClicked ? "Next" : "Feeling Bored Again?"}
      </Button>
    </>
  )
}

export default App

