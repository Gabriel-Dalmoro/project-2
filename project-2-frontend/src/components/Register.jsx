import { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../components/Spinner';

import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const Register = props => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  // Initialize dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // This grabs the value from initialState in authSlice.js
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    state => state.auth
  );

  useEffect(() => {
    // If there is error, show the error message
    if (isError) {
      toast.error(message);
    }

    // Redirect back to home page when logged in
    if (isSuccess || user) {
      navigate('/');
    }
    // Reset error after successful login
    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(email);

    if (password !== password2) {
      toast.error('Password do not match');
    } else {
      const userData = {
        name,
        email,
        password,
      };
      // Dispatching register from authSlice.js
      // This get the register form hook up to createAsyncThunk
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={onSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          name="name"
          onChange={onChange}
          placeholder="full Name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          id="email"
          value={email}
          onChange={onChange}
          type="email"
          placeholder="youremail@gmail.com"
          name="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={password}
          onChange={onChange}
          placeholder="********"
          name="password"
          required
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password2"
          className="form-control"
          value={password2}
          name="password2"
          onChange={onChange}
          placeholder="Confirm password"
          required
        />
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
      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
        Already have an account? Login here.
      </button>
    </div>
  );
};

export default Register;
