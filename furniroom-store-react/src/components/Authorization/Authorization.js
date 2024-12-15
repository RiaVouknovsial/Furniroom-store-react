import React, { useState } from 'react';
import './Authorization.css';

const Authorization = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(pattern)) {
      setEmailError(
        email === '' ? "Email can't be blank" : 'Enter a valid email address'
      );
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = () => {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!password.match(pattern)) {
      setPasswordError(
        password === ''
          ? "Password can't be blank"
          : 'Must contain 8 characters, one number, one uppercase, one lowercase'
      );
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    if (isEmailValid && isPasswordValid) {
      console.log('Form Submitted:', { email, password });
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <header>Login Form</header>
        <form onSubmit={handleSubmit}>
          <div className={`field ${emailError ? 'error' : ''}`}>
            <div className="input-area">
              <input
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
              />
              <i className="icon fas fa-envelope"></i>
              {emailError && (
                <i className="error error-icon fas fa-exclamation-circle"></i>
              )}
            </div>
            {emailError && <div className="error error-txt">{emailError}</div>}
          </div>
          <div className={`field ${passwordError ? 'error' : ''}`}>
            <div className="input-area">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validatePassword}
              />
              <i className="icon fas fa-lock"></i>
              {passwordError && (
                <i className="error error-icon fas fa-exclamation-circle"></i>
              )}
            </div>
            {passwordError && (
              <div className="error error-txt">{passwordError}</div>
            )}
          </div>
          <div className="pass-txt">
            <a href="#">Forgot password?</a>
          </div>
          <input type="submit" value="Login" />
        </form>
        <div className="sign-txt">
          Not a member? <a href="#">Signup now</a>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
