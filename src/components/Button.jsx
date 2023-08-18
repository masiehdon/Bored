/* eslint-disable react/prop-types */

function Button({ OnHandleButtonClick, children }) {
    // Receiving and destructuring props + children props
    return (
        <div>
            <button onClick={OnHandleButtonClick}>{children}</button>
          
        </div>
    )
}

export default Button
