  body: {
    _id: '6428e9803448989c21c75163',
    content: 'tweeeeeet',
    user: {
      _id: '64249cf8be0e0639997b8904',
      name: 'caitlin',
      email: 'caitlin@email.com',
      createdAt: '2023-03-29T20:18:00.352Z',
      updatedAt: '2023-03-29T20:18:00.352Z',
      __v: 0
    },
    createdAt: '2023-04-02T02:33:36.654Z',
    updatedAt: '2023-04-02T02:33:36.654Z',
    __v: 0,
    updatedContent: 'tweeeeeet!'
  },
  _body: true,
  length: undefined,
  user: {
    _id: '64249cf8be0e0639997b8904',
    name: 'caitlin',
    email: 'caitlin@email.com',
    createdAt: '2023-03-29T20:18:00.352Z',
    updatedAt: '2023-03-29T20:18:00.352Z',
    __v: 0
  },



//tweetlistitem:

// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import './TweetListItem.css';
// import EditForm from '../../components/EditForm/EditForm';
// import DeleteTweet from '../../components/DeleteTweet/DeleteTweet';
// import ReplyForm from '../ReplyForm/ReplyForm';
// import Retweet from '../../components/Retweet/Retweet';
// import Favorite from '../../components/Favorite/Favorite';
// import Bookmark from '../../components/Bookmark/Bookmark'; 

// export default function TweetListItem({ user, tweet, setTweets, handleDeleteTweet, handleUpdateTweet}) {
//   const [showReply, setShowReply] = useState(true);

<!-- //   return (
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
//                     handleDeleteTweet={handleDeleteTweet} 
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
//                 handleUpdateTweet={handleUpdateTweet}
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
// } -->

Edit Form:
// import { useState } from 'react';
// import './EditForm.css';

// export default function EditForm({user, tweet, setTweets, handleUpdateTweet, showEdit, setShowEdit}) {
//   const [updatedContent, setUpdatedContent] = useState({updatedContent:tweet.content});
  
//   async function handleSubmit(e) {
//     e.preventDefault();
//     await handleUpdateTweet(tweet, updatedContent);
//     setUpdatedContent(updatedContent);
//     setShowEdit(true);
//   }

//   function handleChange(e) {
//     setUpdatedContent({
//     ...updatedContent,
<!-- //     [e.target.name]: e.target.value -->
//     })
//   }

<!-- //   return (
//     <>
//       <form className="flex-ctr-column" onSubmit={handleSubmit}>
//         <input type="hidden" name="tweet" value={tweet}></input>
//         <textarea className="updatedContent" name="updatedContent" value={updatedContent.updatedContent} onChange={handleChange}/>
//         <button className="saveBtn" type="submit">Save</button>
//       </form>
//     </>
//   );
// } -->

Models:
// const bookmarksSchema = new Schema ({
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   }
// }, {
//   timestamps: true
// })

// const likesSchema = new Schema ({
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
// }, {
//   timestamps: true
// })

// const replySchema = new Schema ({
//   content: {
//     type: String,
//     required: true
//   },
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   likes: [likesSchema],
//   bookmarks: [bookmarksSchema]
// }, {
//   timestamps: true
// })

// const tweetSchema = new Schema ({
//   content: {
//     type: String,
//     required: true
//   },
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   likes: [likesSchema],
//   replies: [replySchema],
//   bookmarks: [bookmarksSchema],
//   retweets: [{
//     rt: {
//       type: Boolean,
//       default: false
//     },
//     rtUser: {
//       type: Schema.Types.ObjectId,
//       ref: 'User',
//   },
//     rtUserName: String,
//   }],
// }, {
//   timestamps: true
// })