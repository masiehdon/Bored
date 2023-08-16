/* eslint-disable react/prop-types */
function Button({onFetchActivities, children}) {
    return (
        <div>
            <button onClick={onFetchActivities}>{children }</button>
        </div>
    )
}

export default Button
