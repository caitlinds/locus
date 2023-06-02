import * as usersAPI from '../../utilities/users-api';
import { useState, useEffect } from 'react';
import './DirectoryPage.css';

export default function Directory(user, setUser) {
  const [users, setUsers] = useState([]);

  useEffect(function() {
    async function getUsers() {
      const users = await usersAPI.getAll();
      setUsers(users);
    }
      getUsers();
    }, []);

  return (
    <>
    <main>
      <h1>Directory</h1>
      <h2>
      {users.map((user, idx) => 
      (<li className="dirList">
        {user.name} - {user.email}
        </li>)
      )}
      </h2>
    </main>
    </>
  );
}