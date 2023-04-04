// import { Link } from 'react-router-dom';
import './TweetListItem.css';
import { useState } from 'react';
import EditForm from '../../components/EditForm/EditForm';
import DeleteTweet from '../../components/DeleteTweet/DeleteTweet';
import Reply from '../../components/Reply/Reply';
import Retweet from '../../components/Retweet/Retweet';
import Favorite from '../../components/Favorite/Favorite';
import Bookmark from '../../components/Bookmark/Bookmark';
// import { Routes, Route } from 'react-router-dom';

export default function TweetListItem({ user, tweet, setTweets, handleDeleteTweet, handleUpdateTweet}) {
  const [showEdit, setShowEdit] = useState(true);
  // const [showOpts, setShowOpts] = useState(false);

  return (
    <>
    <li id="userName">{tweet.user.name}</li>
        {tweet.user._id === user._id ? 
          // <div>
          // {showOpts ?
          <div>
            {showEdit ? 
            <>
              <li className="tweetContent">
                  {tweet.content}
                  {/* <button id="tweetOptBtn" onClick={() => setShowOpts(!showOpts)}>
                    <img id="opts-btn" src="/opts-btn.jpeg" />
                  </button> */}
                  <div id="css-test">
                  <button className="editBtn" onClick={() => setShowEdit(!showEdit)}>
                    <img alt="edit" id="edit-icon" src="edit_icon.png"/>
                  </button>
                  <DeleteTweet 
                    user={user} 
                    tweet={tweet} 
                    handleDeleteTweet={handleDeleteTweet} 
                  />
                  </div>
              </li>
                  {/* <div id="optBtn">
                  </div> */}
              <div>
                <Reply />
                <Retweet />
                <Favorite />
                <Bookmark />
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
          {/* </div>
          : <option value="2">2</option>} */}
        <br/>
        <br/>
    </>
  );
}