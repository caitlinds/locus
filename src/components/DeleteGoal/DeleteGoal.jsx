import './DeleteGoal.css';

export default function DeleteGoal({user, goal, handleDeleteGoal}) {
  function handleSubmit(e) {
    e.preventDefault();
    handleDeleteGoal(goal);
  }

  return (
    <button className="delBtn" type="submit" onClick={handleSubmit}>
      <img alt="delete" id="del-icon" src="delete_icon.png"/>
    </button>
  );
}