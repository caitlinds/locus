// import { useState } from 'react';
import './Retweet.css';

export default function Retweet({user, tweet, setTweets, handleUpdateTweet, showEdit, setShowEdit}) {
  return (
    <>
    <button className="replyBtn">
      <img alt="reply" className="reply-icon" src="./retweet_icon.png"/>
    </button>
    </>
  );
}