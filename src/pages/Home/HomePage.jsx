// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './HomePage.css';
import TweetList from '../../components/TweetList/TweetList';
import TweetForm from '../../components/TweetForm/TweetForm';
// import CheckedInUsers from '../../components/CheckedInUsers/CheckedInUsers';
// import CheckOut from '../../components/CheckOut/CheckOut';
// import Posts from '../../components/Posts/Posts';
// import EditPost from '../../components/EditPost/EditPost';
// import * as postsAPI from '../../utilities/posts-api';
import * as tweetsAPI from '../../utilities/tweets-api';
import { useState, useEffect } from 'react';

export default function Home({user, setUser}) {
  const [tweets, setTweets] = useState([]);

  useEffect(function() {
    async function getTweets() {
      const tweets = await tweetsAPI.getAll();
      setTweets(tweets);
    }
    getTweets();
  }, [tweets])

  async function handleAddTweet(tweetData) {
    const tweet = await tweetsAPI.add(tweetData);
    setTweets([...tweets, tweet]);
  }

  return (
    <>
      <main>
          <TweetForm handleAddTweet={handleAddTweet} />
          <TweetList user={user} tweets={tweets} />
      </main>
    </>
  );
}