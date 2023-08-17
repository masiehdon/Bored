
import {  useState } from 'react';
import Button from './components/Button';
import './App.css'
import DropDown from './components/DropDown';

function App() {
  const [activities, setActivities] = useState([])
  const [category, setCategory] = useState([])

  async function fetchActivities() {
  try{
  const response = await fetch("https://www.boredapi.com/api/activity/");
    const data = await response.json();
    const activity = data.activity
    const category = data.type
    setActivities([activity])
    setCategory([category])
  console.log(data);
  } catch (error) {
  console.error("Error fetching activities:", error);
}
}
  // useEffect(() => {
  //   fetchActivities();
  // }, [])
  
  

  return (
    <>
      <DropDown />
      <h1>{activities}</h1>
      <h2>{ category }</h2>
      {/* Passing down fetchActivities function as props to Button component */}
      <Button onFetchActivities={ fetchActivities }>Get a random guess</Button>
    </>
  )
}

export default App
