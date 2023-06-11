// import { Link } from 'react-router-dom';
// import { useState } from 'react';
import './TimeListItem.css';

export default function TimeListItem({ user, time, setTimes, handleAddTime, handleCloseTime }) {
  // const [showEdit, setShowEdit] = useState(true);

  return (
    <>
    <div>
    Time in: {time.timeIn}
    <li>Time out: {time.timeOut}</li>
    <br/>
    {/* {time.timeOut ?
      " - Clocked out"
      :
      " - Not clocked out"
    } */}
    </div>
    </>
  );
}