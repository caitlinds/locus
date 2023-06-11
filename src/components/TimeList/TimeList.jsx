import TimeListItem from '../../components/TimeListItem/TimeListItem';
import './TimeList.css';

export default function TimeList({user, setUser, times, setTimes, handleAddTime, handleCloseTime}) {
  const TimeList = times.map((time, idx) => (
      <TimeListItem 
        user={user} 
        time={time} 
        setTimes={setTimes}
        handleAddTime={handleAddTime}
        handleCloseTime={handleCloseTime}
        key={idx}
      />
  ));

    return (
      <>
        <ul className="TimeList">{TimeList}</ul>
      </>
    );
}