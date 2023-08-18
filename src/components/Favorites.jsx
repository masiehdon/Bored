/* eslint-disable react/prop-types */
function Favorites({fav}) {
    return (
        <div>
            {fav.map((item, index) => (
                <h2 key={index}>{item}</h2>
            ))}
        </div>
    )
}

export default Favorites
