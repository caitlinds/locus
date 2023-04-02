import { useState } from 'react';
import './EditForm.css';

export default function EditForm({user, tweet, setTweets, handleUpdateTweet}) {
  const [updatedContent, setUpdatedContent] = useState({updatedContent:tweet.content});
  
  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateTweet(tweet, updatedContent);
    // console.log(tweet);
    setUpdatedContent(updatedContent);
  }

  function handleChange(e) {
    setUpdatedContent({
    ...updatedContent,
    [e.target.name]: e.target.value
    })
    // console.log(updatedContent.updatedContent);
  }

  return (
    <>
      <form className="flex-ctr-column" onSubmit={handleSubmit}>
        <input type="hidden" name="tweet" value={tweet}></input>
        <textarea name="updatedContent" value={updatedContent.updatedContent} onChange={handleChange}></textarea>
        <button type="submit">Save</button>
      </form>
    </>
  );
}