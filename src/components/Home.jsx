import { useId } from 'react';
import { useState } from 'react';
import Button from './Button';
import Categories from './Categories';
import Favorites from './Favorites';
import '../App.css'

import Activity from './Activity';

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

	async function fetchActivities(selectedCategory) {
		try {
			const url = selectedCategory
				? `https://www.boredapi.com/api/activity?type=${selectedCategory}`
				: `https://www.boredapi.com/api/activity/`

			const response = await fetch(url);
			const data = await response.json();

			setSuggestion(data);   // tillägg

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
	
	function handleButtonClick(category) {
		setCategorySuggestion(category);
		setButtonClicked(true);
		fetchActivities(category);
		setIsClicked(true);
		setSaved(false);
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
						onClick={() => handleButtonClick(type)}
					>
						{label}
					</button>))};
			</div>

			{buttonClicked &&
				<Activity category={categorySuggestion} {...suggestion} />}

		</>
	);
}

export default Home;
