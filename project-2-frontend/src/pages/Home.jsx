import React, { useEffect as useMyEffect, useState } from 'react';
import Body from '../components/Body.jsx';
import Head from '../components/Head.jsx';
import Weather from '../components/Weather.jsx';

const Home = () => {
  const [weatherData, setWeatherData] = useState({});

  const getCurrentWeather = async () => {
    try {
      let response = await fetch('http://localhost:5001/weather');
      let values = await response.json();
      setWeatherData(values);
    } catch (ex) {
    }
  };

  useMyEffect(() => {
    const id = setInterval(() => {
      getCurrentWeather();
    }, 1);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <Head />
      <Weather weatherData={weatherData}/>
      <Body weatherData={weatherData}/>
    </div>
  );
};

export default Home;
