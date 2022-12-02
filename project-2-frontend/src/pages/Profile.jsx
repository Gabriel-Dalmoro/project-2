import { useSelector, useDispatch } from 'react-redux';
// import { getProfile, reset } from '../features/profile/profileSlice';
import Spinner from '../components/Spinner';

import React, { useEffect as useMyEffect, useState } from 'react';
import Body from '../components/Body.jsx';
import Weather from '../components/Weather.jsx';
import profileService from '../features/auth/profile/profileService';
import { getUser } from '../features/auth/authSlice.js';

const Home = () => {
  const { user, isLoading, isSuccess } = useSelector(state => state.auth);
  
  const [weatherData, setWeatherData] = useState({});
  const [profileData, setProfileData] = useState({});

  const getCurrentWeather = async () => {
    try {
      let response = await fetch('http://localhost:5001/weather');
      let values = await response.json();
      setWeatherData(values);
    } catch (ex) {}
  };

  // Refresh the weather data every 30 minutes
  useMyEffect(() => {
    getCurrentWeather();
    const id = setInterval(() => {
      getCurrentWeather();
    }, 30 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  // if (isLoading) {
  //   return <Spinner />;
  // }

  return (
    <div>
      <Weather weatherData={weatherData} user={user} />
      <Body weatherData={weatherData} user={user} />
    </div>
  );
};

export default Home;
