import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='NavBar'>
      <span>Welcome, {user.name}</span>
      <br></br>
      <Link to="/">Home</Link>
      <br></br>     
      <Link to="/favorites">Favorites</Link>
      <br></br>
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}