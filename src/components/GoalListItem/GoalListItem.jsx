import { Link } from 'react-router-dom';
import { useState } from 'react';
import './GoalListItem.css';
import EditGoalForm from '../../components/EditGoalForm/EditGoalForm';
import DeleteGoal from '../../components/DeleteGoal/DeleteGoal';
import ReplyForm from '../ReplyForm/ReplyForm';
import Retweet from '../../components/Retweet/Retweet';
import Favorite from '../../components/Favorite/Favorite';
import Bookmark from '../../components/Bookmark/Bookmark';

export default function GoalListItem({ user, goal, setGoals, handleDeleteGoal, handleUpdateGoal}) {
  const [showEdit, setShowEdit] = useState(true);
  // const [showReply, setShowReply] = useState(true);

  return (
    <>
    <h4>{user.name}</h4>
    <li id="userName">{goal.user.name}</li>
        {/* {user._id}
        {goal.user._id} */}
        {/* {goal.user._id === goal.user._id ?  */}
        {goal.user._id === user.id ? 
          <div>
            {showEdit ? 
            <>
            <Link className="link" to="">
              <li className="goalContent">
                  {goal.content}
                  <div id="css-test">
                  <button className="editBtn" onClick={() => setShowEdit(!showEdit)}>
                    <img alt="edit" id="edit-icon" src="edit_icon.png"/>
                  </button>
                  <DeleteGoal 
                    user={user} 
                    goal={goal} 
                    handleDeleteGoal={handleDeleteGoal} 
                  />
          </div>
              </li>
            </Link>
            </>
              :
              <EditGoalForm 
                user={user} 
                goal={goal}
                setGoals={setGoals}
                handleUpdateGoal={handleUpdateGoal}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />}
          </div> 
          : 
          <li className="goalContent">{goal.content}</li>
          }
        <br/>
        <br/>
    </>
  );
}