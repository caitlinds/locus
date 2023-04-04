import * as tweetsAPI from '../../utilities/tweets-api';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Favorites from '../Favorites/Favorites';
import Bookmarks from '../Bookmarks/Bookmarks';
import Profile from '../Profile/Profile';
import NavBar from '../../components/NavBar/NavBar';
import EditForm from '../../components/EditForm/EditForm';
import HomePage from '../Home/HomePage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [tweets, setTweets] = useState([]);

  useEffect(function() {
    async function getTweets() {
      const tweets = await tweetsAPI.getAll();
      setTweets(tweets);
    }
    getTweets();
  }, []);

  return (
    <main className="App">
      { user ?
          <>
            <aside>
              <NavBar user={user} setUser={setUser} />
            </aside>
            <hr/>
            <Routes>
              {/* Route components in here */}
              <Route path="/*" element={<HomePage user={user} setUser={setUser}/>} />
              <Route path="/favorites" element={<Favorites user={user} setUser={setUser} tweets={tweets} setTweets={setTweets}/>} />
              <Route path="/edit/:id" element={<EditForm user={user} setUser={setUser} />} />
              <Route path="/bookmarks" element={<Bookmarks user={user} setUser={setUser} />} />
              <Route path="/profile" element={<Profile user={user} setUser={setUser} tweets={tweets} setTweets={setTweets}/>} />
            </Routes>
          </>
          :
          <>
          <div></div>
          <div></div>
          <AuthPage setUser={setUser} />
          </>
      }
    </main>
  );
}
