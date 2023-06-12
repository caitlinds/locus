import DirectoryListItem from '../../components/DirectoryListItem/DirectoryListItem';
import './DirectoryList.css';

export default function DirectoryList({user, setUser, allUsers, setAllUsers}) {
  const DirectoryList = allUsers.map((allUser, idx) => (
      <DirectoryListItem 
        user={user} 
        setUser={setUser}
        allUser={allUser}
        key={idx}
      />
  ));

  // {users.map((user, idx) => 
  //   (<li className="dirList">
  //     {user.name} - {user.email}
  //     key={idx}
  //     </li>)
  //   )}

    return (
      <>
        <ul className="TimeList">{DirectoryList}</ul>
      </>
    );
}