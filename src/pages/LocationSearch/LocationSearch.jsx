export default function LocationSearch() {
  function handleClick() {
    alert('clicked');
  }

  function handleChange() {
    alert('typing');
  }

  return (
    <>
    <main>
      <h1 className="LocationSearch">Location Search</h1>
      <input type="text" value="Find a Location" onChange={handleChange}></input>
      <div className="center-align">
          <button type="submit" onClick={handleClick}>Search</button>
      </div>
    </main>
    </>
  );
}