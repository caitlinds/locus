// import { checkToken } from '../../utilities/users-service';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LocationThread.css';
import LogOut from '../../components/LogOut/LogOut';
import CheckedInUsers from '../../components/CheckedInUsers/CheckedInUsers';
import CheckOut from '../../components/CheckOut/CheckOut';
import Posts from '../../components/Posts/Posts';
// import EditPost from '../../components/EditPost/EditPost';
import * as postsAPI from '../../utilities/posts-api';

export default function LocationThread({user, setUser}) {
  const [posts, setPosts] = useState([]);

  useEffect(function() {
    async function getPosts() {
      const posts = await postsAPI.getAll();
      setPosts(posts);
    }
    getPosts();
  }, [])

  async function handleAddPost(postData) {
    const post = await postsAPI.add(postData);
    setPosts([...posts, post]);
  }
 
  const allPostMaps = posts.map((p, idx) => (
    <ul className='postList'>
      <li>{p.user.name}</li>
      <li>{p.content}</li>
      <li>{p.user._id === user._id ? <Link to={`/edit/${p._id}`}>Edit</Link> : 'no'}</li>
      <li>{p.user._id === user._id ? <Link to={`/delete/${p._id}`}>Delete</Link> : 'no'}</li>
    </ul>
  ));

  return (
    <>
      <main className="LocationThread">
        <aside className="checkedUsers">
          <CheckedInUsers />
          <CheckOut/>
          <LogOut user={user} setUser={setUser} />
        </aside>
        <hr/>
        <section>
          <Posts handleAddPost={handleAddPost}/>
          {allPostMaps}
        </section>
      </main>
    </>
  );
}