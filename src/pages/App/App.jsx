import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Favorites from '../Favorites/Favorites';
import NavBar from '../../components/NavBar/NavBar';
import EditTweet from '../../components/EditTweet/EditTweet';
import HomePage from '../Home/HomePage';

export default function App() {
  const [user, setUser] = useState(getUser());

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
              <Route path="/favorites" element={<Favorites user={user} setUser={setUser} />} />
              <Route path="/edit/:id" element={<EditTweet user={user} setUser={setUser} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
