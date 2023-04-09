import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const APIKEY = process.env.API_KEY;
if (!APIKEY) {
  throw new Error('API_KEY is not defined in environment variables');
}

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=calgary&units=metric&appid=${APIKEY}`;

// Get specific data from API
const getWeather = async () => {
  try {
    const response = await fetch(weatherUrl);
    const data = await response.json();

    return {
      location: data.name,
      conditions: data.weather[0].description,
      temperature: Math.round(data.main.temp),
      feels_like: Math.round(data.main.feels_like),
      wind_speed: Math.round(data.wind.speed),
      humidity: data.main.humidity,
    };
  } catch (error) {
    console.error('Failed to retrieve weather data:', error);
    throw new Error('Failed to retrieve weather data');
  }
};

export default getWeather;
