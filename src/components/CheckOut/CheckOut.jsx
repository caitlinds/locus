export default function CheckOut(user, setUser) {
  function handleCheckOut() {
    alert('Check Out');
  }
    return (
      <>
        <main>
        <div className="LogOut">
          <button className="btn-sm" onClick={handleCheckOut}>CHECK OUT</button>
        </div>
        </main>
      </>
    );
}