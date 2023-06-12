import './SettingsPage.css';

export default function Favorites(user, setUser, tweets, setTweets) {

  return (
    <>
    <main>
      <h1>Settings</h1>
      <h3>
        <li className="settings-email">Name: <input value={user.user.name}></input></li>
        <br/>
        <li className="settings-email">Email: {user.user.email}</li>
        <br/>
        <li className="settings-email">Phone: <input value={user.user.phone}></input></li>
        <br/>
        <li className="settings-email">Title: <input value={user.user.title}></input></li>
        {/* List profile information */}
        {/* - update profile information
        - update phone number
        - update profile picture?
        - update address */}
        {/* Will require user model with unrequired address and phone numebr */}
      </h3>
    </main>
    </>
  );
}