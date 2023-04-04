// import { useState } from 'react';
import './Favorite.css';

export default function Favorite({user, tweet, setTweets, handleUpdateTweet, showEdit, setShowEdit}) {

  return (
    <>
    <button className="replyBtn">
      <img alt="reply" className="fave-icon" src="./heart_icon.png"/>
    </button>
    </>
  );
}