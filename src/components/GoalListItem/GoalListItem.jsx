import { Link } from 'react-router-dom';
import { useState } from 'react';
import './GoalListItem.css';
import EditGoalForm from '../../components/EditGoalForm/EditGoalForm';
import DeleteGoal from '../../components/DeleteGoal/DeleteGoal';

export default function GoalListItem({ user, goal, setGoals, handleDeleteGoal, handleUpdateGoal}) {
  const [showEdit, setShowEdit] = useState(true);

  return (
    <>
        {goal.user._id === user._id ?
          <div>
            <li id="userName">{goal.createdAt.split("", 10)}</li>
            {showEdit ? 
            <>
            <Link className="link" to="">
              <li className="goalContent">
                  <div id="goalText">{goal.content}</div>
                  <div id="css-test">
                  <article className="inline">
                  <button className="editBtn" onClick={() => setShowEdit(!showEdit)}>
                    <img alt="edit" id="edit-icon" src="edit_icon.jpg"/>
                  </button>
                  <DeleteGoal 
                    user={user} 
                    goal={goal} 
                    handleDeleteGoal={handleDeleteGoal} 
                  />
                  </article>
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
          <>
          </>
          }
        <br/>
        <br/>
    </>
  );
}