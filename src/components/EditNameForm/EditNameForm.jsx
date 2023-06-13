import './EditNameForm.css';
import { useState } from 'react';

export default function EditNameForm({user, setUser, handleUpdateUserName}) {
  const [updatedName, setUpdatedName] = useState({updatedName:user.name});
  const [alert, setAlert] = useState("");
  
  async function handleSubmit(e) {
    e.preventDefault();
    await handleUpdateUserName(updatedName);
    setUpdatedName(updatedName);
    setUser(user);
  }

  function handleChange(e) {
    setUpdatedName({
    ...updatedName,
    [e.target.name]: e.target.value
    })
  }

  function handleOnClick(e) {
    setAlert(" - Log in again to see changes ")
  }

  return ( 
    <>
      <form className="inline" onSubmit={handleSubmit}>
        <input type="hidden" value={user.name}></input>
        <input className="settings-input" name="updatedName" value={updatedName.updatedName} onChange={handleChange}/>
        <button className="infoSaveBtn" type="submit" onClick={handleOnClick}>Save</button>
        <div className="alert">{alert}</div>
      </form>
    </>
  );
}