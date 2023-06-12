import './PayListItem.css';

export default function PayListItem({ user, setUser, time, setTimes, hrlyPay}) {
  const sessionPay = time.totalHours * hrlyPay;
  const timeInStr = `\u00A0\u00A0\u00A0${time.timeIn.substring(6, 10)}-${time.timeIn.substring(0, 4)} • ${time.timeIn.substring(11, 19)}`;

  return (
    <>
    <div className="pay-session">
      <li>In: {timeInStr}</li>
      <li>Out: {time.timeOut.substring(6, 10)}-{time.timeOut.substring(0, 4)}  • {time.timeOut.substring(11, 19)}</li>
      <li className="session-pay">Pay: ${sessionPay.toFixed(2)}</li>
    </div>
    <br/>
    </>
  );
}