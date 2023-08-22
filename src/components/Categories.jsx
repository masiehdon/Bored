/* eslint-disable react/prop-types */
import '../styles/DropDown.css';

function Categories({ onSetCategory }) {
  
  function selectCategory(e) {
      const selectedCategory = e.target.value
    onSetCategory(selectedCategory)
    console.log('selectedCategory: ', e.target.value)
  }

  return (
    <div className="dropdown">
      
      <button value={''} className="activity random" onClick={selectCategory}>Random</button>
      <button value={'relaxation'} className="activity relax" onClick={selectCategory}>Relax</button>
      <button value={'social'} className="activity social" onClick={selectCategory}>Social</button>
      <button value={'cooking'} className="activity cooking" onClick={selectCategory}>Cooking</button>
      <button value={'education'} className="activity learning" onClick={selectCategory}>Learning</button>
      <br></br>
      <br></br>
   

    </div>
  );
}

export default Categories;
