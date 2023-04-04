import { Link } from 'react-router-dom';
import './NavBar.css';
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
      <Link to="/">
      <button className="replyBtn">
        <img alt="home" className="home-icon" src="./home_icon.png"/>
      </button>
      </Link>
      <br></br>     
      <Link to="/favorites">
      <button className="replyBtn">
        <img alt="favorites" className="fave-icon-nb" src="./heart_icon.png"/>
      </button>
      </Link>
      <br></br>     
      <Link to="/bookmarks">
      <button className="replyBtn">
        <img alt="bookmarks" className="bm-icon-nb" src="./bookmark_icon.png"/>
      </button>
      </Link>
      <br></br>     
      <Link to="/profile">
      <button className="replyBtn">
        <img alt="profile" className="profile-icon" src="./profile_icon.png"/>
      </button>
      </Link>
      <br></br>
      <Link to="" onClick={handleLogOut}>
      <button className="replyBtn">
        <img alt="reply" className="logout-icon-nb" src="./logout_icon.png"/>
      </button>
      </Link>
    </nav>
  );
}