import GoalListItem from '../../components/GoalListItem/GoalListItem';
import './GoalList.css';

export default function GoalList({user, goals, setGoals, handleDeleteGoal, handleUpdateGoal}) {
  const GoalList = goals.map((goal, idx) => (
      <GoalListItem 
        user={user} 
        goal={goal} 
        setGoals={setGoals}
        handleDeleteGoal={handleDeleteGoal} 
        handleUpdateGoal={handleUpdateGoal}
        key={idx}
      />
  ));

    return (
      <>
        <ul className="GoalList">{GoalList}</ul>
      </>
    );
}