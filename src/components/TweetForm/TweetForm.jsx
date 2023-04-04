import { useState } from 'react';
import './TweetForm.css';

export default function TweetForm({handleAddTweet}) {
  const [content, setContent] = useState({content:''});

  function handleSubmit(e) {
      e.preventDefault();
      handleAddTweet(content);
      setContent({content:''});
  }
  
  function handleChange(e) {
      setContent({
      ...content,
      [e.target.name]: e.target.value
      })
  }

  return (
    <>
      <form className="flex-ctr-column" onSubmit={handleSubmit}>
        <textarea className="tweetInput" name="content" value={content.content} onChange={handleChange} required/>
        <button className="tweetBtn" type="submit">Tweet</button>
      </form>
    </>
  );
}