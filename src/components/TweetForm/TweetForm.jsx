import { useState } from 'react';

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
      <main>
      <form onSubmit={handleSubmit}>
        <input name="content" value={content.content} onChange={handleChange} required/>
        <button type="submit">Submit</button>
      </form>
      </main>
    </>
  );
}