import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input value={name} name="name" id="name" placeholder="full Name" />
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
          placeholder="********"
          id="password"
          name="password"
        />
        {/* <button type="submit">Register</button> */}
        <Fab
          type="submit"
          variant="extended"
          size="medium"
          color="white"
          aria-label="add"
        >
          <AppRegistrationIcon sx={{ mr: 1 }} />
          Sign Up
        </Fab>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
