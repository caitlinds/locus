export default function LocationSearch() {
  function handleClick() {
    alert('clicked');
  }
  return (
    <>
    <main>
      <h1 className="LocationSearch">Location Search</h1>
      <input type="text" name="" value="Find a Location"></input>
      <div class="center-align">
          <button type="submit" onClick={handleClick}>Search</button>
      </div>
    </main>
    </>
  );
}