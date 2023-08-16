
import { useEffect, useState } from 'react';
import './App.css'

function App() {
const [activities, setActivities] = useState([])

  async function fetchActivities() {
  try{
  const response = await fetch("http://www.boredapi.com/api/activity/");
    const data = await response.json();
    const activity = data.activity
  setActivities([activity])
  console.log(data);
  } catch (error) {
  console.error("Error fetching activities:", error);
}
}
  useEffect(() => {
    fetchActivities();
  }, [])
  
  return (
    <>
      <button>Get random activity</button>
      <h1>{ activities }</h1>
    </>
  )
}

export default App
