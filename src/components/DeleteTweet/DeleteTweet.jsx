export default function DeleteTweet({user, tweet, handleDeleteTweet}) {
  function handleSubmit(e) {
    e.preventDefault();
    handleDeleteTweet(tweet);
  }

  return (
    <>
      <button type="submit" onClick={handleSubmit}>Delete</button>
    </>
  );
}