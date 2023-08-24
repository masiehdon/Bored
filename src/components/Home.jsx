import { useEffect, useState } from 'react';
import Button from './Button';
import '../App.css'
import DropDown from './DropDown';
import Activity from './Activity';

function Home() {
	const [activities, setActivities] = useState([]);
	const [category, setCategory] = useState([]);
	const [isClicked, setIsClicked] = useState(false);

	const [suggestion, setSuggestion] = useState(null);
	const [categorySuggestion, setCategorySuggestion] = useState("social")
	// const categorySuggestion = "music"; // relaxation

	useEffect(() => {
		console.log("enter useEffect");
		let subscribed = true;

		const getActivity = (categorySuggestion) => {
			const apiLink = `https://www.boredapi.com/api/activity?type=${categorySuggestion}`;
			fetch(apiLink)
				.then((response) => {
					// console.log({ response })
					return response.json();
				})
				.then((jsonData) => {
					// console.log({ jsonData });
					setSuggestion(jsonData);
				})
				.catch((error) => {
					console.log("Error fetching", error)
				})
		};

		if (subscribed) {
			if (categorySuggestion === undefined) {
				console.log("undefined, no fetching")
			} else {
				getActivity(categorySuggestion)
			}
		}

		return () => {
			subscribed = false;
			console.log({ subscribed })
		}
	}, [categorySuggestion]);

	if (suggestion) {
		console.log("Now data is loaded", { suggestion })
	}

	// async function fetchActivities(selectedCategory) {
	// 	try {
	// 		const url = selectedCategory
	// 			? `https://www.boredapi.com/api/activity?type=${selectedCategory}`
	// 			: `https://www.boredapi.com/api/activity/`

	// 		const response = await fetch(url);
	// 		const data = await response.json();
	// 		// const activity = data.activity
	// 		setActivities(data.activity)
	// 		console.log(data);
	// 	} catch (error) {
	// 		console.error("Error fetching activities:", error);
	// 	}
	// }

	function handleButtonClick() {
		// fetchActivities(category)
		setIsClicked(true)
		console.log({ category })
	}

	return (
		<>
			<div className="header">
				<h1>Bored?</h1>
				<h2>Casual & Daily Activities</h2>
				<p className="ingress">Get ideas for activites. Click on a button.</p>
			</div>
			<button className="activity random">Random</button>
			<button className="activity relax">Relax</button>
			<button className="activity social">Social</button>
			<button className="activity cooking">Cooking</button>
			<button className="activity learning">Learning</button>
			<br></br>
			<br></br>

			<Activity category={categorySuggestion} {...suggestion} />


			<DropDown
				onSetCategory={setCategory}
			/>
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
	);
}

export default Home;