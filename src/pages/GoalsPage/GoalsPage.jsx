import './GoalsPage.css';
import GoalList from "../../components/GoalList/GoalList";
import GoalForm from '../../components/GoalForm/GoalForm';
// import NavBar from '../../components/NavBar/NavBar';
import * as goalsAPI from '../../utilities/goals-api';
import { useState, useEffect } from 'react';

export default function GoalsPage(user, setUser) {
  const [goals, setGoals] = useState([]);

  useEffect(function() {
    async function getGoals() {
      const goals = await goalsAPI.getAll();
      setGoals(goals);
    }
    getGoals();
  }, []);

  async function handleAddGoal(goalData) {
    const goals = await goalsAPI.add(goalData);
    setGoals(goals);
  }

  async function handleUpdateGoal(goal, updatedContent) {
    goal.updatedContent = updatedContent.updatedContent;
    await goalsAPI.update(goal);
    const goals = await goalsAPI.getAll();
    setGoals(goals);
  }

  async function handleDeleteGoal(goalData) {
    await goalsAPI.deleteGoal(goalData);
    const goals = await goalsAPI.getAll();
    setGoals(goals);
  }

  return (
    <>
    <main>
      <h1>Goals</h1>
        {/* Write and list goals (like tweets)
        Add goal date
        Post date turn goal red
        Check box completed or not? */}
      <section className="flex-ctr-column">
        <GoalForm handleAddGoal={handleAddGoal} />
        <GoalList 
          user={user} 
          goals={goals} 
          setGoals={setGoals}
          handleDeleteGoal={handleDeleteGoal} 
          handleUpdateGoal={handleUpdateGoal}
        />
        </section>
    </main>
    </>
  );
}