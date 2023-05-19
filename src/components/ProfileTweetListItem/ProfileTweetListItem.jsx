// import { Link } from 'react-router-dom';
// import './ProfileTweetListItem.css';
// import { useState } from 'react';
// import EditForm from '../../components/EditForm/EditForm';
// import DeleteTweet from '../../components/DeleteTweet/DeleteTweet';
// import ReplyForm from '../ReplyForm/ReplyForm';
// import Retweet from '../../components/Retweet/Retweet';
// import Favorite from '../../components/Favorite/Favorite';
// import Bookmark from '../../components/Bookmark/Bookmark';

// export default function ProfileTweetListItem({ user, tweet, setTweets}) {
//   const [showEdit, setShowEdit] = useState(true);
//   const [showReply, setShowReply] = useState(true);

//   return (
//     <>
//     <li id="userName">{tweet.user.name}</li>
//         {tweet.user._id === user._id ? 
//           <div>
//             {showEdit ? 
//             <>
//             <Link className="link" to="">
//               <li className="tweetContent">
//                   {tweet.content}
//                   <div id="css-test">
//                   <button className="editBtn" onClick={() => setShowEdit(!showEdit)}>
//                     <img alt="edit" id="edit-icon" src="edit_icon.png"/>
//                   </button>
//                   <DeleteTweet 
//                     user={user} 
//                     tweet={tweet} 
//                     // handleDeleteTweet={handleDeleteTweet} 
//                   />
//           </div>
//               </li>
//             </Link>
//               <div>
//                 {showReply ?
//                   <button className="replyBtn" onClick={() => setShowReply(!showReply)}>
//                     <img alt="reply" className="reply-icon" src="./reply_icon.png"/>
//                   </button>
//                   :
//                   <ReplyForm/>
//                 }
//                 <Retweet />
//                 <Favorite />
//                 <Bookmark />
//               </div>
//             </>
//               :
//               <EditForm 
//                 user={user} 
//                 tweet={tweet}
//                 setTweets={setTweets}
//                 // handleUpdateTweet={handleUpdateTweet}
//                 showEdit={showEdit}
//                 setShowEdit={setShowEdit}
//               />}
//           </div> 
//           : 
//           <>
//           <li className="tweetContent">{tweet.content}</li>
//           <div>
//             {showReply ?
//               <button className="replyBtn" onClick={() => setShowReply(!showReply)}>
//                 <img alt="reply" className="reply-icon" src="./reply_icon.png"/>
//               </button>
//               :
//               <ReplyForm/>
//             }
//             <Retweet />
//             <Favorite />
//             <Bookmark />
//           </div>
//           </>
//           }
//         <br/>
//         <br/>
//     </>
//   );
// }