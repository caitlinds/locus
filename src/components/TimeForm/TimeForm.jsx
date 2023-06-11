import { useState } from 'react';
import './TimeForm.css';

export default function TimeForm({user, setUser, handleAddTime, handleCloseTime}) {
  const curDate = Date();
  const [timeIn, setTimeIn] = useState({ timeIn:curDate });
  const [timeOut, setTimeOut] = useState({ timeOut:curDate });

  function handleTimeInSubmit(e) {
    e.preventDefault();
    setTimeIn({timeIn:curDate});
    handleAddTime(timeIn, user);
    setTimeIn({timeIn:curDate});
  }

  function handleTimeOutSubmit(e) {
    e.preventDefault();
    setTimeOut({timeOut:curDate});
    handleCloseTime(timeOut, user);
    setTimeOut({timeOut:curDate});
  } 

  return (
    <>
      { user.timeStatus ? 
        <form className="flex-ctr-column" onSubmit={handleTimeOutSubmit}>
          <button className="goalBtn" type="submit">Clock Out</button>
        </form>
      :
        <form className="flex-ctr-column" onSubmit={handleTimeInSubmit}>
          <button className="goalBtn" type="submit">Clock In</button>
        </form>
      }
    </>
  );
}