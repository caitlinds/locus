import './HomePage.css';
import TweetList from '../../components/TweetList/TweetList';
import TweetForm from '../../components/TweetForm/TweetForm';
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
  }, [tweets]);

  async function handleAddTweet(tweetData) {
    const tweet = await tweetsAPI.add(tweetData);
    setTweets([...tweets, tweet]);
  }

  async function handleUpdateTweet(tweet, updatedContent) {
    tweet.updatedContent = updatedContent.updatedContent;
    // console.log(tweet);
    await tweetsAPI.update(tweet);
    setTweets(tweets);
  }

  async function handleDeleteTweet(tweetData) {
    await tweetsAPI.deleteTweet(tweetData);
    setTweets(tweets);
  }

  return (
    <>
      <main className="flex-ctr-column">
          <h2>Home</h2>
          <TweetForm handleAddTweet={handleAddTweet} />
          <TweetList 
            user={user} 
            tweets={tweets} 
            setTweets={setTweets}
            handleDeleteTweet={handleDeleteTweet} 
            handleUpdateTweet={handleUpdateTweet} 
          />
      </main>
    </>
  );
}