/* eslint-disable react/prop-types */

function Button({ onFetchActivities, children }) {
    // Receiving and destructuring props + children props
    return (
        <div>
            <button onClick={onFetchActivities}>{ children }</button>
        </div>
    )
}

export default Button
