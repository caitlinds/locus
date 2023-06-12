import './PortalPage.css';
import { Link } from 'react-router-dom';
// import TweetList from '../../components/TweetList/TweetList';
// import TweetForm from '../../components/TweetForm/TweetForm';
import NavBar from '../../components/NavBar/NavBar';
// import * as tweetsAPI from '../../utilities/tweets-api';
// import { useState, useEffect } from 'react';

export default function PortalPage({ user, setUser }) {
  // const [tweets, setTweets] = useState([]);

  // useEffect(function() {
  //   async function getTweets() {
  //     const tweets = await tweetsAPI.getAll();
  //     setTweets(tweets);
  //   }
  //   getTweets();
  // }, []);

  // async function handleAddTweet(tweetData) {
  //   const tweets = await tweetsAPI.add(tweetData);
  //   setTweets(tweets);
  // }

  // async function handleUpdateTweet(tweet, updatedContent) {
  //   tweet.updatedContent = updatedContent.updatedContent;
  //   await tweetsAPI.update(tweet);
  //   const tweets = await tweetsAPI.getAll();
  //   setTweets(tweets);
  // }

  // async function handleDeleteTweet(tweetData) {
  //   await tweetsAPI.deleteTweet(tweetData);
  //   const tweets = await tweetsAPI.getAll();
  //   setTweets(tweets);
  // }

  return (
    <>
      <main className="Home">
        <aside>
            <NavBar user={user} setUser={setUser} />
        </aside>
        <hr/>
        <section className="flex-ctr-column portal-page">
          <h2 className='portal-page-hdr'>Welcome, {user.name}</h2>
          <h3 className='portal-page-user-title'>{user.title}</h3>
          <div className="rowOne">
            <Link to="/pay" className="link">
              <button className="portal-icon-container">
                <img alt="pay" className="portal-icon" src="./pay_icon.png"/>
              </button>
              <h4 className='portal-icon-title'>Pay</h4>
            </Link>
            <Link to="/timeclock" className="link">
              <button className="portal-icon-container">
                <img alt="timeclock" className="portal-icon" src="./clock_icon.png"/>
              </button>
              <h4 className='portal-icon-title'>Time Clock</h4>
            </Link>
            {/* <Link to="/timeoff" className="link">
              <button className="portal-icon">
                <img alt="timeoff" className="bm-icon-nb" src="./timeoff_icon.png"/>
              </button>
              <h4>Time Off</h4>
            </Link> */}
            <Link to="/profile" className="link">
              <button className="portal-icon-container">
                <img alt="profile" className="portal-icon" src="./profile-icon.png"/>
              </button>
              <h4 className='portal-icon-title'>Profile</h4>
            </Link>
          </div>
          <div className="rowTwo">
            <Link to="/directory" className="link">
              <button className="portal-icon-container">
                <img alt="directory" className="portal-icon" src="./directory_icon.png"/>
              </button>
              <h4 className='portal-icon-title'>Directory</h4>
            </Link>
            {/* <Link to="/orgchart" className="link">
              <button className="portal-icon">
                <img alt="orgchart" className="bm-icon-nb" src="./orgchart_icon.png"/>
              </button>
              <h4>Org Chart</h4>
            </Link> */}
            <Link to="/goals" className="link">
              <button className="portal-icon-container">
                <img alt="goals" className="portal-icon" src="./goals_icon.png"/>
              </button>
              <h4 className='portal-icon-title'>Goals</h4>
            </Link>
            <Link to="/settings" className="link">
              <button className="portal-icon-container">
                <img alt="settings" className="portal-icon" src="./settings_icon.png"/>
              </button>
              <h4 className='portal-icon-title'>Settings</h4>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}