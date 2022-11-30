import axios from 'axios';

const API_URL = '/api/users/me';

// Get user Profile
const getProfile = async token => {
  const config = {
    //Token needs to be in the headers
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};

const profileService = { getProfile };

export default profileService;
