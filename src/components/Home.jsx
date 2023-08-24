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
	const [categorySuggestion, setCategorySuggestion] = useState("")
	const [buttonClicked, setButtonClicked] = useState(false);
	const activityTypes = [
		{ type: '', label: 'Random' },
		{ type: 'relaxation', label: 'Relax' },
		{ type: 'social', label: 'Social' },
		{ type: 'cooking', label: 'Cooking' },
		{ type: 'education', label: 'Learning' },
	];

	const getActivity = (categorySuggestion) => {
		const apiLink = `https://www.boredapi.com/api/activity?type=${categorySuggestion}`;
		fetch(apiLink)
			.then((response) => {
				return response.json();
			})
			.then((jsonData) => {
				setSuggestion(jsonData);
			})
			.catch((error) => {
				console.log("Error fetching", error)
			})
	};

	useEffect(() => {
		console.log("enter useEffect");
		let subscribed = true;

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

	const handleButton = (category) => {
		setCategorySuggestion(category);
		setButtonClicked(true);
		getActivity(category);
	}

	return (
		<>
			<div className={`header ${buttonClicked ? 'move-up' : ''}`}>
				<h1>Bored?</h1>
				<h2>Casual & Daily Activities</h2>
				<p className="ingress">Get ideas for activites. Click on a button.</p>
			</div>

			<div className="activity-menu">
				{activityTypes.map(({ type, label }) => (
					<button
						key={type}
						className={`activity ${type}`}
						onClick={() => handleButton(type)}
					>
						{label}
					</button>))};
			</div>

			{buttonClicked &&
				<Activity category={categorySuggestion} {...suggestion} />}


			{/* <DropDown
				onSetCategory={setCategory}
			/> */}
			{/* <h1>{activities}</h1>
			<h2>{category}</h2> */}
			{/* Passing down fetchActivities function as props to Button component */}
			{/* <Button
				OnHandleButtonClick={handleButtonClick}
				category={category}
			>
				{isClicked ? "Get a New Idea" : "Feeling Bored Again?"}
			</Button> */}
		</>
	);
}

export default Home;


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

	// function handleButtonClick() {
	// 	// fetchActivities(category)
	// 	setIsClicked(true)
	// 	console.log({ category })
	// }
