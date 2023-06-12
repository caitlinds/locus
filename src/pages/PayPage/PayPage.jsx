import './PayPage.css'; 
import PayList from "../../components/PayList/PayList";
import * as timesAPI from '../../utilities/times-api';
import { useState, useEffect } from 'react';

export default function PayPage({user, setUser}) {
  const hrlyPay = user.name.length + 20;
  const curDate = Date();
  const [times, setTimes] = useState([]);

  useEffect(function() {
    async function getTimes() {
      const times = await timesAPI.getUserAll();
      setTimes(times);
    }
    getTimes();
  }, []);

  return (
    <>
    <main>
      <h1>Pay</h1>
      {/* <div className="flex-ctr-column"> */}
      <div className="flex-ctr-column pay-page-container">
        <h2 id="date">
          {curDate.split("", 15)}
          <br/>
          Hourly Pay: ${hrlyPay}
        </h2>
        <div className="pay-page-content">
        <PayList 
          user={user} 
          setUser={setUser}
          times={times} 
          setTimes={setTimes}
          hrlyPay={hrlyPay}
        />
        </div>
      </div>
      {/* </div> */}
    </main>
    </>
  );
}