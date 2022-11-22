import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import LoginIcon from "@mui/icons-material/Login";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="enteryour@realemail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
        />
        {/* <button type="submit">Log In</button> */}
        <Fab
          type="submit"
          variant="extended"
          size="medium"
          color="white"
          aria-label="add"
        >
          <LoginIcon sx={{ mr: 1 }} />
          Login
        </Fab>
      </form>

      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Sign up here.
      </button>
    </div>
  );
};
