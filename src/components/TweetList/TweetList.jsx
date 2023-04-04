import TweetListItem from '../../components/TweetListItem/TweetListItem';
import './TweetList.css';

export default function TweetList({user, tweets, setTweets, handleDeleteTweet, handleUpdateTweet}) {
  const TweetList = tweets.map((tweet, idx) => (
      <TweetListItem 
        user={user} 
        tweet={tweet} 
        setTweets={setTweets}
        handleDeleteTweet={handleDeleteTweet} 
        handleUpdateTweet={handleUpdateTweet}
        key={idx}
      />
  ));

    return (
      <>
        <ul className="TweetList">{TweetList}</ul>
      </>
    );
}