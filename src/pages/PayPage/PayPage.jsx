export default function PayPage({user, setUser}) {
  const hrlyPay = user.name.length + 20;
  const curDate = Date();

  return (
    <>
    <main>
      <h1>Pay</h1>
      <div className="flex-ctr-column">
        <h2>
          {curDate.split("", 15)}
        </h2>
        <h2>
          Hourly Pay: ${hrlyPay}
        </h2>
      </div>
      <h2> 
        {/* Will need JS function of random integer bt $15-$40/h
        Multiply it by the amount of hours clocked in and out (only after clocked out)
        Take ~33% for taxes
        Every 2 weeks make a pay statement:
        - hours worked + total comp
        - taxes removed
        - net pay
        Mock W-2 link? */}
      </h2>
    </main>
    </>
  );
}