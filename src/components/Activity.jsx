function Activity(suggestion) {
	console.log({ suggestion });
	const { activity, participants, price } = suggestion;
	console.log(activity, participants, price);

	return (
		<div className="activity-content">
			<h3>{activity}</h3>
		</div>
		)
}

export default Activity;