import { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import LoginIcon from '@mui/icons-material/Login';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

function Login(props) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

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

    // Redirect back to home page when log in is successful
    if (isSuccess || user) {
      navigate('/');
    }
    // Reset state after successful login
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

    // Get data from login form
    const userData = {
      email,
      password,
    };
    // Dispatch login from authSlice.js
    dispatch(login(userData))
      .unwrap()
      .then(user => {
        // After receiving a good response from API, we can navigate the user by unwrapping the AsyncThunkAction. Alternatively, we can catch the AsyncThunkAction rejection to show an error message.
        toast.success(`Logged in as ${user.name}`);
        navigate('/profile');
      })
      .catch(toast.error);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          name="email"
          onChange={onChange}
          placeholder="youremail@example.com"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onChange}
          placeholder="*********"
          name="password"
          required
        />

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

      {/* <button
        className="link-btn"
        onClick={() => props.onFormSwitch('register')}
      >
        Don't have an account? Sign up here.
      </button> */}
    </div>
  );
}

export default Login;
