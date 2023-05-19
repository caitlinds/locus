import { useState } from 'react';
import './GoalForm.css';

export default function GoalForm({handleAddGoal}) {
  const [content, setContent] = useState({content:''});

  function handleSubmit(e) {
      e.preventDefault();
      handleAddGoal(content);
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
        <button className="goalBtn" type="submit">Add Goal</button>
      </form>
    </>
  );
}