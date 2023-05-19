// import * as tweetsAPI from '../../utilities/tweets-api';
// import * as goalsAPI from '../../utilities/goals-api';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import PayPage from '../PayPage/PayPage';
import DirectoryPage from '../DirectoryPage/DirectoryPage';
import OrgChartPage from '../OrgChartPage/OrgChartPage';
import GoalsPage from '../GoalsPage/GoalsPage';
import SettingsPage from '../SettingsPage/SettingsPage';
import TimeClockPage from '../TimeClockPage/TimeClockPage';
import TimeOffPage from '../TimeOffPage/TimeOffPage';
import Profile from '../Profile/Profile';
// import NavBar from '../../components/NavBar/NavBar';
// import EditForm from '../../components/EditForm/EditForm';
import EditGoalForm from '../../components/EditGoalForm/EditGoalForm';
// import HomePage from '../Home/HomePage';
import PortalPage from '../PortalPage/PortalPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  // const [tweets, setTweets] = useState([]);
  // const [goals, setGoals] = useState([]);

  // useEffect(function() {
  //   async function getTweets() {
  //     const tweets = await tweetsAPI.getAll();
  //     setTweets(tweets);
  //   }
  //   getTweets();
  // }, []);

  // useEffect(function() {
  //   async function getGoals() {
  //     const goals = await goalsAPI.getAll();
  //     setGoals(goals);
  //   }
  //   getGoals();
  // }, []);

  return (
    <main className="App">
      { user ?
          <>
            {/* <aside>
              <NavBar user={user} setUser={setUser} />
            </aside>
            <hr/> */}
            <Routes>
              {/* Route components in here */}
              <Route path="/*" element={<PortalPage user={user} setUser={setUser}/>} />
              {/* <Route path="/home" element={<HomePage user={user} setUser={setUser}/>} /> */}
              <Route path="/pay" element={<PayPage user={user} setUser={setUser}/>} />
              {/* <Route path="/edit/:id" element={<EditForm user={user} setUser={setUser} />} /> */}
              <Route path="/edit/:id" element={<EditGoalForm user={user} setUser={setUser} />} />
              <Route path="/timeclock" element={<TimeClockPage user={user} setUser={setUser} />} />
              <Route path="/timeoff" element={<TimeOffPage user={user} setUser={setUser} />} />
              <Route path="/directory" element={<DirectoryPage user={user} setUser={setUser} />} />
              <Route path="/orgchart" element={<OrgChartPage user={user} setUser={setUser} />} />
              <Route path="/goals" element={<GoalsPage user={user} setUser={setUser} />} />
              <Route path="/settings" element={<SettingsPage user={user} setUser={setUser} />} />
              <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
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
