import './DirectoryListItem.css';

export default function DirectoryListItem({ user, setUser, allUser }) {

  return (
    <>
    <div className="flex-ctr-column">
      <div className="directory-list-item">
        <li className="directory-list-name">{allUser.name}</li>
        <li className="directory-list-title">{allUser.title}</li>
        <li className="directory-list-email">{allUser.email}</li>
        <li className="directory-list-phone">{allUser.phone ? allUser.phone : "Phone number not provided"}</li>
      </div>
    </div>
      <br/>
    </>
  );
}