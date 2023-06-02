import './TimeClockPage.css';

export default function TimeClock() {
  const curDate = Date();

  return (
    <>
    <main>
      <h1>Time Clock</h1>
      <div className="flex-ctr-column">
        <div className="timeClock">
          <h2 id="date">{curDate.split("", 15)}</h2>
          <h3 id="time">{curDate.substring(16, 24)}</h3>
        </div>
        <button className="goalBtn">Clock In</button>
      </div>
      <h2>
        {/* Show current time
        Show date
        Have clock in/clock out button 
        Creates new entry (like tweet) that lists time and date
        List "recent activity"
        *can then pull these numbers from server for pay calculation */}
      </h2>
    </main>
    </>
  );
}