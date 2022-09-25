import React from 'react';
import './style.css';
import { useState } from 'react';

export const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const emailChange = (ev) => {
    setUser({ ...user, email: ev.target.value });
    //NEFUNGUJE podmienka, vloží meno iba, keď píšem do políčka User Name a zmení ten vstup
    if (user.email.indexOf('@') === true && user.username === '') {
      setUser({
        ...user,
        email: ev.target.value,
        username: ev.target.value.slice(0, user.email.indexOf('@')),
      });
    }
  };

  const usernameChange = () => {
    setUser({
      ...user,
      username: user.email.slice(0, user.email.indexOf('@')),
    });
    console.log(user.email.slice(0, user.email.indexOf('@')));
  };

  const passwordChange = (ev) => {
    setUser({ ...user, password: ev.target.value });
  };

  const passwordCheck = (ev) => {
    setUser({ ...user, passwordConfirm: ev.target.value });
    //NEFUNGUJE: až po poslednom odkliku a daní medzere vypíše ok, alert reaguje na každý vstup a neviem to odstaviť
    /* if (user.password === user.passwordConfirm) {
      alert('Heslo ok.');
    } else {
      alert('Hesla se nezhodují');
    }*/
  };

  const submit = (ev) => {
    ev.preventDefault();
    console.log(user);
  };

  return (
    <>
      <form className="column">
        <input
          id="column__email"
          type="text"
          value={user.email}
          placeholder="Email Adress"
          onChange={emailChange}
        />

        <br />

        <input
          id="column__name"
          type="text"
          placeholder="User Name"
          value={user.username}
          onChange={usernameChange}
        />

        <br />

        <input
          id="column__password"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={passwordChange}
        />

        <br />

        <input
          id="column__email"
          type="password"
          placeholder="Confirm Password"
          value={user.passwordConfirm}
          onChange={passwordCheck}
        />
      </form>
      <button
        type="submit"
        disabled={user.password !== user.passwordConfirm} //NEFUNGUJE 🤦‍♀️
        onClick={submit}
      >
        REGISTER
      </button>
    </>
  );
};
