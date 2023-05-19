import { useState } from 'react';
import './EditGoalForm.css';

export default function EditGoalForm({user, goal, setGoals, handleUpdateGoal, showEdit, setShowEdit}) {
  const [updatedContent, setUpdatedContent] = useState({updatedContent:goal.content});
  
  async function handleSubmit(e) {
    e.preventDefault();
    await handleUpdateGoal(goal, updatedContent);
    setUpdatedContent(updatedContent);
    setShowEdit(true);
  }

  function handleChange(e) {
    setUpdatedContent({
    ...updatedContent,
    [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <form className="flex-ctr-column" onSubmit={handleSubmit}>
        <input type="hidden" name="tweet" value={goal}></input>
        <textarea className="updatedContent" name="updatedContent" value={updatedContent.updatedContent} onChange={handleChange}/>
        <button className="saveBtn" type="submit">Save</button>
      </form>
    </>
  );
}

// import { useState } from 'react';
// import './EditForm.css';

// export default function EditForm({user, tweet, setTweets, handleUpdateTweet, showEdit, setShowEdit}) {
//   const [updatedContent, setUpdatedContent] = useState({updatedContent:tweet.content});
  
//   async function handleSubmit(e) {
//     e.preventDefault();
//     await handleUpdateTweet(tweet, updatedContent);
//     setUpdatedContent(updatedContent);
//     setShowEdit(true);
//   }

//   function handleChange(e) {
//     setUpdatedContent({
//     ...updatedContent,
//     [e.target.name]: e.target.value
//     })
//   }

//   return (
//     <>
//       <form className="flex-ctr-column" onSubmit={handleSubmit}>
//         <input type="hidden" name="tweet" value={tweet}></input>
//         <textarea className="updatedContent" name="updatedContent" value={updatedContent.updatedContent} onChange={handleChange}/>
//         <button className="saveBtn" type="submit">Save</button>
//       </form>
//     </>
//   );
// }