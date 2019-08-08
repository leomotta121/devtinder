import React from 'react';
import './Login.css';

import logo from '../assets/Logo-Tinder.svg';

export default function Login() {
  return (
    <div className="login-container">
      <form>
        <img src={logo} alt="Tinder logo" />
        <input placeholder="Type your github user" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
