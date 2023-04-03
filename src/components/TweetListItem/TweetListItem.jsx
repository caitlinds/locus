// import { Link } from 'react-router-dom';
import './TweetListItem.css';
// import { useState } from 'react';
import EditForm from '../../components/EditForm/EditForm';
import DeleteTweet from '../../components/DeleteTweet/DeleteTweet';
// import { Routes, Route } from 'react-router-dom';

export default function TweetListItem({ user, tweet, setTweets, handleDeleteTweet, handleUpdateTweet, showEdit, setShowEdit}) {

  return (
    <>
        <li id="userName">{tweet.user.name}</li>
        {tweet.user._id === user._id ? 
          <div>
            {showEdit ? 
            <>
              <li className="tweetContent">
                  {tweet.content}
              </li>
                  <div id="optBtn">
                  <button className="editBtn" onClick={() => setShowEdit(!showEdit)}>Edit</button>
                  <DeleteTweet 
                    user={user} 
                    tweet={tweet} 
                    handleDeleteTweet={handleDeleteTweet} 
                  />
                  </div>
            </>
              :
              <EditForm 
                user={user} 
                tweet={tweet}
                setTweets={setTweets}
                handleUpdateTweet={handleUpdateTweet}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />}
          </div> 
          : 
          <li className="tweetContent">{tweet.content}</li>}
        <br/>
        <br/>
    </>
  );
}