import { useState } from 'react';
import './AuthPage.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
    <main className="AuthPage">
      <img alt="logo" className="login-logo" src="./logo.png"></img>
      <h2>Welcome to Locus HR</h2>
      <button className="signUpBtn" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
      }
    </main>
    </>
  );
}