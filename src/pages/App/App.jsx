import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import LocationSearch from '../LocationSearch/LocationSearch';
import LocationThread from '../LocationThread/LocationThread';
import NavBar from '../../components/NavBar/NavBar';
import EditPost from '../../components/EditPost/EditPost';
import Home from '../Home/Home';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/*" element={<Home />} />
              <Route path="/search" element={<LocationSearch user={user} setUser={setUser} />} />
              <Route path="/location" element={<LocationThread user={user} setUser={setUser} />} />
              <Route path="/edit/:id" element={<EditPost user={user} setUser={setUser} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
