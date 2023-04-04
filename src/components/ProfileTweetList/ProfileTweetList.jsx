import ProfileTweetListItem from '../../components/ProfileTweetListItem/ProfileTweetListItem';
import './ProfileTweetList.css';

export default function ProfileTweetList({user, setUser, tweets, setTweets}) {
  const userTweets = tweets.filter(tweet => tweet.user._id === user._id);
  const ProfileTweetList = userTweets.map((tweet, idx) => (
    <ProfileTweetListItem 
    user={user} 
    tweet={tweet} 
    setTweets={setTweets}
    key={idx}
  />
  ));

    return (
      <>
        <ul className="ProfileTweetList">{ProfileTweetList}</ul>
      </>
    );
}