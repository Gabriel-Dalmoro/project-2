import axios from 'axios';

const API_URL = '/api/users/';

// Register user
const register = async userData => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    // Save web token into local storage
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  // Return user data and token
  return response.data;
};

// Login
const login = async userData => {
  const response = await axios.post(API_URL + 'login', userData);

  if (response.data) {
    // Save web token into local storage
    // Local storage only accept strings
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  // Return user data and token
  return response.data;
};

// Logout user
const logout = () => localStorage.removeItem('user');

// Get user

const getLoggedInUser = async () => {
  // Convert token back into an object
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  const config = {
    //Token needs to be in the headers
    headers: { Authorization: `Bearer ${user.token}` },
  };
  try {
    console.log('something');
    let response = await axios.get(
      'http://localhost:5001/api/users/me',
      config
    );

    return response.data;
  } catch (ex) {}
};

const authService = {
  register,
  logout,
  login,
  getLoggedInUser,
};

export default authService;
