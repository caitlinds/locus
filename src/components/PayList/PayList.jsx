import PayListItem from '../../components/PayListItem/PayListItem';
import './PayList.css';

export default function PayList({user, setUser, times, setTimes, hrlyPay}) {
  var grossHours = 0;
  times.forEach(function(time) {
    if (time.timeOut) grossHours += time.totalHours;
  })
  const grossPay = grossHours * hrlyPay;

  const PayList = times.map((time, idx) => (
    time.timeOut ? 
      <PayListItem 
        user={user} 
        setUser={setUser}
        time={time} 
        setTimes={setTimes}
        hrlyPay={hrlyPay}
        key={idx}
      />
      :
      "" 
      ));

    return (
      <>
        <li className="gross-hours">Gross Hours: {grossHours.toFixed(2)}</li>
        <li className="gross-pay">Gross Pay: ${grossPay.toFixed(2)}</li>
        <ul className="TimeList">{PayList}</ul>
      </>
    );
}