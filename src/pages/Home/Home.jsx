export default function Home() {
    function handleClick() {
      alert('clicked');
    }
  
    function handleChange() {
      alert('typing');
    }
  
    return (
      <>
      <main>
        <h1 className="Home">Home</h1>
      </main>
      </>
    );
  }