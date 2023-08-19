

/* eslint-disable react/prop-types */
function Favorites({ fav }) {
    
   
    return (
        <div>
            {fav.map((favorite) => (
                <h2 key={favorite.id}>{favorite.activity}</h2>
            ))}
        </div>
    )
}

export default Favorites
