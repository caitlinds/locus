// import { Link } from 'react-router-dom';
import { useState } from 'react';
import EditForm from '../../components/EditForm/EditForm';
import DeleteTweet from '../../components/DeleteTweet/DeleteTweet';
// import { Routes, Route } from 'react-router-dom';

export default function TweetListItem({ user, tweet, setTweets, handleDeleteTweet, handleUpdateTweet }) {
  const [showEdit, setShowEdit] = useState(true);

  return (
    <>
        <li>{tweet.user.name}</li>
        {tweet.user._id === user._id ? 
          <div>
            {showEdit ? 
              <li>
                {tweet.content}
                <br/>
                <button onClick={() => setShowEdit(!showEdit)}>EDIT</button>
                <br/>
                <DeleteTweet 
                  user={user} 
                  tweet={tweet} 
                  handleDeleteTweet={handleDeleteTweet} 
                />
              </li>
              :
              <EditForm 
                user={user} 
                tweet={tweet}
                setTweets={setTweets}
                handleUpdateTweet={handleUpdateTweet}
              />}
          </div> 
          : 
          <li>{tweet.content}</li>}
        <br/>
        <br/>
    </>
  );
}