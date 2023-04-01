// import TweetForm from '../../components/TweetForm/TweetForm';
import TweetListItem from '../../components/TweetListItem/TweetListItem';
// import { checkToken } from '../../utilities/users-service';
// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TweetList.css';
// import LogOut from '../../components/LogOut/LogOut';
// import CheckedInUsers from '../../components/CheckedInUsers/CheckedInUsers';
// import CheckOut from '../../components/CheckOut/CheckOut';
// import Posts from '../../components/Posts/Posts';
// import EditPost from '../../components/EditPost/EditPost';
import * as tweetsAPI from '../../utilities/tweets-api';

export default function TweetList({user, tweets}) {
  const TweetList = tweets.map((tweet, idx) => (
      <TweetListItem user={user} tweet={tweet} key={idx} />
  ));

    return (
      <>
      <ul className="TweetList">{TweetList}</ul>
      </>
    );
}