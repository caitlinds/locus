// import { useState } from 'react';
import './Favorite.css';

export default function Favorite({user, goal, setGoals, handleUpdateGoal, showEdit, setShowEdit}) {

  return (
    <>
    <button className="replyBtn">
      <img alt="reply" className="fave-icon" src="./heart_icon.png"/>
    </button>
    </>
  );
}