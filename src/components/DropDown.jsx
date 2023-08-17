/* eslint-disable react/prop-types */
import '../styles/DropDown.css';

function DropDown({ onSetCategory }) {
  function selectCategory(e) {
      const selectedCategory = e.target.value
    onSetCategory(selectedCategory)
    console.log('selectedCategory: ', e.target.value)
  }

  return (
    <div className="dropdown">
      <select className="dropdown-select" onChange={selectCategory}>
        <option value="">Select a category</option>
        <option value="education">Education</option>
        <option value="recreational">Recreational</option>
        <option value="social">Social</option>
        <option value="diy">DIY</option>
        <option value="charity">Charity</option>
        <option value="cooking">Cooking</option>
        <option value="relaxation">Relaxation</option>
        <option value="music">Music</option>
        <option value="busywork">Busywork</option>
      </select>
    </div>
  );
}

export default DropDown;
