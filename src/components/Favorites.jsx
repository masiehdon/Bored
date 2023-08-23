/* eslint-disable react/prop-types */
function Favorites({ onHandleSelectFavorites, fav }) {
    return (
       <div>
            <button onClick={onHandleSelectFavorites}>Favorites</button>
            {fav.map(item => (
                <div key={item.id}>
                    <h2>{item.activity}</h2>
                    <p>Participants: {item.participants}</p>
                    <p>Price: {item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Favorites;
