import "../styles/Activity.css";

function Activity({ activity, category, participants, price }) {
	console.log("activity", activity);
	console.log("category", category);

	const percentage = parseInt(price * 100) + " %";
	
	const categoryToGenre = {
		music: "Music activity",
		relaxation: "Relax and chill",
		cooking: "Do some cooking",
		education: "Learn something exciting",
	};
	
	const genre = categoryToGenre[category] || "Random ideas for you";
	

	return (
		<>
			<div className="activity-content">
				<h2 className="h2">{genre}</h2>
				<p className="activity">{activity}</p>
				<h3 className="h3">Participants</h3>
				{participants === 1 ?
					<p className="p">{participants} person</p> :
					<p className="p">{participants} people, or so.</p>
				}
				<h3 className="h3">Price range</h3>
				{price && price !== 0 ?
					<p className="p">{percentage}</p> :
					<p className="p">0 %</p>
				}
				<p className="note">0 % is very cheap and 100 % is very expensive activity</p>
			</div>
		</>
	)
}

export default Activity;