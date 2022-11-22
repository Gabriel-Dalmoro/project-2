import React, { useState } from 'react';
import '../App.css';
import Register from '../components/Register.jsx';
import Login from '../components/Login.jsx';

function LoginRegister() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = formName => {
    setCurrentForm(formName);
  };

  return (
    <div className="LoginRegister">
      {currentForm === 'login' ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default LoginRegister;