import ProfileTweetList from "../../components/ProfileTweetList/ProfileTweetList";

export default function Profile({user, setUser, tweets, setTweets}) {

  return (
    <>
    <main>
      <h1>{user.name}'s Profile</h1>
        <div className="flex-ctr-column"><ProfileTweetList 
          user={user} 
          setUser={setUser} 
          tweets={tweets} 
          setTweets={setTweets}
        />
        </div>
    </main>
    </>
  );
}