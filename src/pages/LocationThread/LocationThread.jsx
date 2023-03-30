import { checkToken } from '../../utilities/users-service';
import './LocationThread.css';

export default function LocationThread() {
  function handleClick() {
    alert('clicked');
  }
  
  function handleChange() {
    alert('typing');
  }

  return (
    <>
      <main className="LocationThread">
        <aside className="checkedUsers">
          <h1>Checked In Users</h1>
          <h2>Log Out</h2>
        </aside>
        <hr/>
        <section>
          <h1>Posts</h1>
          <input value="Write a message" onChange={handleChange}></input>
          <button onClick={handleClick}>Submit</button>
        </section>
      </main>
    </>
  );
}