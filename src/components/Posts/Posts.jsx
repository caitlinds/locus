import { useState } from 'react';

export default function Posts({handleAddPost}) {
const [content, setContent] = useState({content:''});

  function handleSubmit(e) {
    e.preventDefault();
    handleAddPost(content);
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
      <h1>Posts</h1>
      <form onSubmit={handleSubmit}>
        <input name="content" value={content.content} onChange={handleChange} required/>
        <button type="submit">Submit</button>
      </form>
      
      </main>
    </>
  );
}