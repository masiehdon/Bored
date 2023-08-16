import '../styles/DropDown.css';

function DropDown() {
  return (
    <div className="dropdown">
      <select className="dropdown-select">
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
