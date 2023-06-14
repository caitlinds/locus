import './SettingsPage.css';
import * as usersAPI from '../../utilities/users-api';
import EditNameForm from '../../components/EditNameForm/EditNameForm';
import EditPhoneForm from '../../components/EditPhoneForm/EditPhoneForm';
import EditTitleForm from '../../components/EditTitleForm/EditTitleForm';
import { getUser } from '../../utilities/users-service';

export default function Settings({user, setUser}) {
  // const [updatedPhone, setUpdatedPhone] = useState({updatedPhone:user.phone});
  // const [updatedTitle, setUpdatedTitle] = useState({updatedTitle:user.title});

  async function handleUpdateUserName(updatedName) {
    const user = await usersAPI.updateName(updatedName);
    setUser(user);
  }

  async function handleUpdateUserPhone(updatedPhone) {
    const user = await usersAPI.updatePhone(updatedPhone);
    setUser(user);
  }

  async function handleUpdateUserTitle(updatedTitle) {
    const user = await usersAPI.updateTitle(updatedTitle);
    setUser(user);
  }

  getUser();

  return (
    <>
    <main>
      <h1>Settings</h1>
      <div className="flex-left pay-page-container">
        <div className="pay-page-content">
          <div className = "settings-list">
            <div className="settings-hdr">
              <div className="info-hdr">User Information:</div>
            </div>

            <div className="settings-descrip">Name:&ensp;&ensp;&ensp;</div>
            <div className="inline">
              <EditNameForm 
                user={user}
                setUser={setUser}
                handleUpdateUserName={handleUpdateUserName}
              />
            </div>
            <br/>
            <br/>

            <div className="settings-descrip">Email: &ensp;&ensp;&ensp;</div>
            <div className="settings-email">{user.email}</div>
            <br/>
            <br/>

            <div className="settings-descrip">Phone:&nbsp;&ensp;&ensp;</div>
            <div className="inline">
              <EditPhoneForm 
                user={user}
                setUser={setUser}
                handleUpdateUserPhone={handleUpdateUserPhone}
              />
            </div>
            <br/>
            <br/>

            {/* <div className="settings-descrip">Title:&nbsp;&ensp;&ensp;&ensp;&ensp;</div> */}
            <div className="inline">
              {/* <EditTitleForm 
                user={user}
                setUser={setUser}
                handleUpdateUserTitle={handleUpdateUserTitle}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}