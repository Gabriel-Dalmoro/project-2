import { useSelector, useDispatch } from 'react-redux';
import { getProfile, reset } from '../features/profile/profileSlice';
import Spinner from '../components/Spinner';

import React, { useEffect as useMyEffect, useState } from 'react';
import Body from '../components/Body.jsx';
import Weather from '../components/Weather.jsx';

const Home = () => {
  const [weatherData, setWeatherData] = useState({});
  const [profileData, setProfileData] = useState({});

  const getCurrentWeather = async () => {
    try {
      let response = await fetch('http://localhost:5001/weather');
      let values = await response.json();
      setWeatherData(values);
    } catch (ex) {}
  };

  // TODO: This might change based on the redux approach
  const getProfileData = async () => {
    try {
      let response = await fetch('http://localhost:5001/api/users/me');
      let values = await response.json();
      setProfileData(values);
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

  useMyEffect(() => {
    getProfileData();
  }, []);

  return (
    <div>
      <Weather weatherData={weatherData} />
      <Body weatherData={weatherData} />
    </div>
  );
};

export default Home;
