import { useId } from 'react';
import { useState } from 'react';
import Button from './Button';
import Categories from './Categories';
import Favorites from './Favorites';
import '../App.css'

function Home() {
  const [activities, setActivities] = useState({
    activity: '',
    participants: 0,
    price: 0
  });
  const [category, setCategory] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [fav, setFav] = useState([]);
  const [saved, setSaved] = useState(false);

  const uniqueId = useId();

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
        price: data.price,
        id: uniqueId
      });

    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  }

  function handleButtonClick() {
    fetchActivities(category);
    setIsClicked(true);
    setSaved(false);
  }

  function handleSaveFav() {
    if (saved) {
      const newFavList = fav.filter(item => item.id !== activities.id);
      setFav(newFavList);
    } else if (!fav.some(item => item.id === activities.id)) {
      const newFav = { id: activities.id, activity: activities.activity };
      setFav(currentFav => [...currentFav, newFav]);
    }
    setSaved(curr => !curr);
  }

  const shouldDisplayDetails = activities.activity !== '';

  return (
    <>
      <div className="header">
        <h1>Bored?</h1>
        <h2>Casual & Daily Activities</h2>
        <p className="ingress">Get ideas for activities. Click on a button.</p>
      </div>

      <Categories onSetCategory={setCategory} onHandleButtonClick={handleButtonClick} />

      {shouldDisplayDetails && (
        <>
          <h1>{activities.activity}</h1>
          <button onClick={handleSaveFav}>{saved ? 'Saved!' : 'Save'}</button>
          <h3>Participants: {activities.participants}</h3>
          <h3>Price: {activities.price}</h3>
        </>
      )}

      <Button
        OnHandleButtonClick={handleButtonClick}
        category={category}
      >
        {isClicked ? "Next" : "Feeling Bored Again?"}
      </Button>

      <Favorites fav={fav} />
    </>
  );
}

export default Home;
