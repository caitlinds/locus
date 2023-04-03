import './HomePage.css';
import TweetList from '../../components/TweetList/TweetList';
import TweetForm from '../../components/TweetForm/TweetForm';
import * as tweetsAPI from '../../utilities/tweets-api';
import { useState, useEffect } from 'react';

export default function Home({user, setUser}) {
  const [tweets, setTweets] = useState([]);
  const [showEdit, setShowEdit] = useState(true);

  useEffect(function() {
    async function getTweets() {
      const tweets = await tweetsAPI.getAll();
      setTweets(tweets);
    }
    getTweets();
  }, []);

  async function handleAddTweet(tweetData) {
    const tweets = await tweetsAPI.add(tweetData);
    setTweets(tweets);
  }

  async function handleUpdateTweet(tweet, updatedContent) {
    tweet.updatedContent = updatedContent.updatedContent;
    await tweetsAPI.update(tweet);
    const tweets = await tweetsAPI.getAll();
    setTweets(tweets);
    setShowEdit(true);
  }

  async function handleDeleteTweet(tweetData) {
    await tweetsAPI.deleteTweet(tweetData);
    const tweets = await tweetsAPI.getAll();
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
            showEdit={showEdit}
            setShowEdit={setShowEdit}
          />
      </main>
    </>
  );
}