import './Profile.css';

export default function Profile({user, setUser}) {
  const hrlyPay = user.email.length + 15;

  return (
    <>
    <main>
      <h1>{user.name}'s Profile</h1>
      <div className="flex-left profile-page-container">
        <div className="flex-left profile-page-content">
          <li className='profile-name'>{user.name}</li>
          <li className='profile-title'>{user.title}</li>
          <div className="personal-info-title-container">
            <li className="personal-info-title">Personal Info:</li>
          </div>
          <br/>
          <div>
            <img alt="email" className="email-icon" src="./email-icon.png"/>
            <div className='inline profile-info-list'>{user.email}</div>
          </div>
          <br/>
          <div>
            <img alt="phone" className="email-icon" src="./phone-icon.png"/>
            <div className='inline profile-info-list'>{user.phone ? user.phone : "Phone number not provided"}</div>
          </div>
          <br/>

          <div className="personal-info-title-container">
            <li className="personal-info-title">Employment Info:</li>
          </div>
          <br/>
          <div>
            <img alt="email" className="email-icon" src="./calendar-icon.png"/>
            <div className='inline profile-info-list'>Start Date: {user.createdAt.substring(6, 10)}-{user.createdAt.substring(0, 4)}</div>
          </div>
          <br/>
          <div>
            <img alt="phone" className="email-icon" src="./profile-pay-icon.png"/>
            <div className='inline profile-info-list'>Hourly Pay: ${hrlyPay}</div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
} 