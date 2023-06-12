import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import PayPage from '../PayPage/PayPage';
import DirectoryPage from '../DirectoryPage/DirectoryPage';
import GoalsPage from '../GoalsPage/GoalsPage';
import SettingsPage from '../SettingsPage/SettingsPage';
import TimeClockPage from '../TimeClockPage/TimeClockPage';
import Profile from '../Profile/Profile';
import EditGoalForm from '../../components/EditGoalForm/EditGoalForm';
import PortalPage from '../PortalPage/PortalPage';
// import OrgChartPage from '../OrgChartPage/OrgChartPage';
// import TimeOffPage from '../TimeOffPage/TimeOffPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <Routes>
              {/* Route components in here */}
              <Route path="/*" element={<PortalPage user={user} setUser={setUser}/>} />
              <Route path="/pay" element={<PayPage user={user} setUser={setUser}/>} />
              <Route path="/edit/:id" element={<EditGoalForm user={user} setUser={setUser} />} />
              <Route path="/timeclock" element={<TimeClockPage user={user} setUser={setUser} />} />
              <Route path="/directory" element={<DirectoryPage user={user} setUser={setUser} />} />
              <Route path="/goals" element={<GoalsPage user={user} setUser={setUser} />} />
              <Route path="/settings" element={<SettingsPage user={user} setUser={setUser} />} />
              <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
              {/* <Route path="/orgchart" element={<OrgChartPage user={user} setUser={setUser} />} /> */}
              {/* <Route path="/timeoff" element={<TimeOffPage user={user} setUser={setUser} />} /> */}
            </Routes>
          </>
           :
          <>
          <AuthPage setUser={setUser} />
          </>
      }
    </main>
  );
}
