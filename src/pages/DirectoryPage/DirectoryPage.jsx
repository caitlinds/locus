import * as usersAPI from '../../utilities/users-api';
import { useState, useEffect } from 'react';
import DirectoryList from "../../components/DirectoryList/DirectoryList";
import './DirectoryPage.css';

export default function Directory({user, setUser}) {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(function() {
    async function getUsers() {
      const allUsers = await usersAPI.getAll();
      setAllUsers(allUsers);
    }
      getUsers();
    }, []);

  return (
    <>
    <main>
      <h1>Directory</h1>
      <div className="flex-ctr-column directory-page-container">
      <div className="directory-page-content">
      <DirectoryList 
          user={user}
          setUser={setUser}
          allUsers={allUsers}
          setAllUsers={setAllUsers}
        />
        </div>
        </div>
    </main>
    </>
  );
}