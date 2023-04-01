import { Link } from 'react-router-dom';

export default function TweetListItem({ user, tweet }) {
  return (
    <>
        <li>{tweet.user.name}</li>
        <li>{tweet.content}</li>
        <li>{tweet.user._id === user._id ? <Link to={`/edit/${tweet._id}`}>Edit</Link> : ''}</li>
        <li>{tweet.user._id === user._id ? <Link to={`/delete/${tweet._id}`}>Delete</Link> : ''}</li>
        <br></br>
    </>
  );
}