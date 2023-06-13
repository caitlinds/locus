import './EditPhoneForm.css';
import { useState } from 'react';

export default function EditPhoneForm({user, setUser, handleUpdateUserPhone}) {
  const [updatedPhone, setUpdatedPhone] = useState({updatedPhone:user.phone});
  const [alert, setAlert] = useState("");
  
  async function handleSubmit(e) {
    e.preventDefault();
    await handleUpdateUserPhone(updatedPhone);
    setUpdatedPhone(updatedPhone);
    setUser(user);
  }

  function handleChange(e) {
    setUpdatedPhone({
    ...updatedPhone,
    [e.target.name]: e.target.value
    })
  }

  function handleOnClick(e) {
    setAlert(" - Log in again to see changes ")
  }

  return ( 
    <>
      <form className="inline" onSubmit={handleSubmit}>
        <input type="hidden" value={user.phone}></input>
        <input className="settings-input" name="updatedPhone" value={updatedPhone.updatedPhone} onChange={handleChange}/>
        <button className="infoSaveBtn" type="submit" onClick={handleOnClick}>Save</button>
        <div className="alert">{alert}</div>
      </form>
    </>
  );
}