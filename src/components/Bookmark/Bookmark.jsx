// import { useState } from 'react';
import './Bookmark.css';

export default function Bookmark({user, tweet, setGoals, handleUpdateGoal, showEdit, setShowEdit}) {

  return (
    <>
    <button className="replyBtn">
      <img alt="reply" className="bm-icon" src="./bookmark_icon.png"/>
    </button>
    </>
  );
}