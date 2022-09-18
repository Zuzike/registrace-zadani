import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Registration } from './components/Registration';

const App = () => {
  return (
    <div className="container">
      <img className="user"></img>
      <Registration
        username="User Name"
        email="Email address"
        password="Password"
        passwordConfirm="Confirm password"
      />
      <button type="submit">REGISTER</button>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
