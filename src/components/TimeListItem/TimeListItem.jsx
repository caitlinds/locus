import './TimeListItem.css';

export default function TimeListItem({ user, time, setTimes, handleAddTime, handleCloseTime }) {
  const timeInStr = `\u00A0\u00A0\u00A0${time.timeIn.substring(6, 10)}-${time.timeIn.substring(0, 4)} • ${time.timeIn.substring(11, 19)}`;

  return (
    <>
    <div className="time-session">
      <li>In: {timeInStr}</li>
      <li>Out: {time.timeOut ? 
        `${time.timeOut.substring(6, 10)}-${time.timeOut.substring(0, 4)}  • ${time.timeOut.substring(11, 19)}`
        : 
        "Current session"}
      </li>
    </div>
      <br/>
    </>
  );
}