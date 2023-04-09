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
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    const config = {
      // Token needs to be in the headers
      headers: { Authorization: `Bearer ${user.token}` },
    };
    const response = await axios.get(
      'http://localhost:5001/api/users/me',
      config
    );
    return response.data;
  } catch (error) {
    console.log('Error fetching user data', error);
    throw error;
  }
};

const authService = {
  register,
  logout,
  login,
  getLoggedInUser,
};

export default authService;
