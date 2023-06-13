import './EditTitleForm.css';
import { useState } from 'react';

export default function EditTitleForm({user, setUser, handleUpdateUserTitle}) {
  const [updatedTitle, setUpdatedTitle] = useState({updatedTitle:user.title});
  const [alert, setAlert] = useState("");
  
  async function handleSubmit(e) {
    e.preventDefault();
    await handleUpdateUserTitle(updatedTitle);
    setUpdatedTitle(updatedTitle);
    setUser(user);
  }

  function handleChange(e) {
    setUpdatedTitle({
    ...updatedTitle,
    [e.target.name]: e.target.value
    })
  }

  function handleOnClick(e) {
    setAlert(" - Log in again to see changes ")
  }

  return ( 
    <>
      <form className="inline" onSubmit={handleSubmit}>
        <input type="hidden" value={user.title}></input>
        <input className="settings-input" name="updatedTitle" value={updatedTitle.updatedTitle} onChange={handleChange}/>
        <button className="infoSaveBtn" type="submit" onClick={handleOnClick}>Save</button>
        <div className="alert">{alert}</div>
      </form>
    </>
  );
}