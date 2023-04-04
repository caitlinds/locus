import './DeleteTweet.css';

export default function DeleteTweet({user, tweet, handleDeleteTweet}) {
  function handleSubmit(e) {
    e.preventDefault();
    handleDeleteTweet(tweet);
  }

  return (
    <button className="delBtn" type="submit" onClick={handleSubmit}>
      <img alt="delete" id="del-icon" src="delete_icon.png"/>
    </button>
  );
}