import GoalList from "../../components/GoalList/GoalList";
import { useState, useEffect } from 'react';

export default function Profile({user, setUser}) {

  return (
    <>
    <main>
      <h1>{user.name}'s Profile</h1>
        <div className="flex-ctr-column">
          {/* <GoalList 
            user={user} 
            goals={goals} 
            setGoals={setGoals}
        /> */}
        {/* - list all profile information */}
        </div>
    </main>
    </>
  );
} 