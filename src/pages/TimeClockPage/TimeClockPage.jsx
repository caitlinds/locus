import './TimeClockPage.css';
import TimeList from "../../components/TimeList/TimeList";
import TimeForm from '../../components/TimeForm/TimeForm';
import * as timesAPI from '../../utilities/times-api';
import * as usersAPI from '../../utilities/users-api';
import { useState, useEffect } from 'react';

export default function TimeClockPage({ user, setUser }) {
  const curDate = Date();
  const [times, setTimes] = useState([]);

  useEffect(function() {
    async function getTimes() {
      const times = await timesAPI.getUserAll();
      setTimes(times);
    }
    getTimes();
  }, []);

  async function handleAddTime(timeData, userData) {
    const times = await timesAPI.add(timeData);
    const user = await usersAPI.update(userData);
    setUser(user);
    setTimes(times);
  }

  async function handleCloseTime(time, userData) {
    await timesAPI.update(time);
    const times = await timesAPI.getUserAll();
    const user = await usersAPI.update(userData);
    setUser(user);
    setTimes(times);
  } 

  return (
    <>
    <main>
      <h1>Time Clock</h1>
      <div className="flex-ctr-column time-page-container">
        <div className="timeClock">
          <h2 id="date">{curDate.split("", 15)}</h2>
          <h3 id="time">{curDate.substring(16, 24)}</h3>
          <h6 id="time-zone">{curDate.substring(34, 80)}</h6>
        </div>
        <TimeForm 
          user={user} 
          setUser={setUser}
          handleAddTime={handleAddTime}
          handleCloseTime={handleCloseTime} />
      <div className="time-page-content">
        <TimeList 
          user={user} 
          setUser={setUser}
          times={times} 
          setTimes={setTimes}
          handleAddTime={handleAddTime}
          handleCloseTime={handleCloseTime}
        />
      </div>
      </div>
    </main>
    </> 
  );
}