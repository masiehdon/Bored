import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';
  
function Navbar() {
  return (
    <div className="top-nav">
      <NavLink to='/'>home</NavLink>
      <NavLink to='/about'>about bored</NavLink>
    </div>
  );
}

export default Navbar;