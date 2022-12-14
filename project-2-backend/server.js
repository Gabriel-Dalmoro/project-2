import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';
import { mockData } from './mockWeather.js';
import colors from 'colors';
import userRouter from './routes/userRoutes.js';
import errorHandler from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

dotenv.config();

// Server port
const PORT = process.env.PORT || 5001;

// Connect to MongoDB database
connectDB();

// Express Server setup
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable Express server to respond to preflight requests
app.use(cors());

const APIKEY = process.env.API_KEY;

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=calgary&units=metric&appid=${APIKEY}`;

// Get specific data from API
const getWeather = async () => {
  const response = await fetch(weatherUrl);
  const data = await response.json();

  // console.log(mockData.weather[0].description);
  return {
    // location: mockData.name,
    // conditions: mockData.weather[0].description,
    // temperature: Math.round(mockData.main.temp),
    // feels_like: mockData.main.feels_like.toFixed(),
    // wind_speed: mockData.wind.speed.toFixed(),
    // humidity: mockData.main.humidity,

    location: data.name,
    conditions: data.weather[0].description,
    temperature: Math.round(data.main.temp),
    feels_like: Math.round(data.main.feels_like),
    wind_speed: Math.round(data.wind.speed),
    humidity: data.main.humidity,
  };
};
app.use('*', (req, res, next) => {
  console.log(req.originalUrl);
  next();
});

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Funactive' });
});

app.get('/weather', async (req, res) => {
  try {
    const currentWeather = await getWeather();
    res.send(currentWeather);
  } catch (err) {
    console.log(err.message);
    res.status(500).send();
  }
});

// Routes
app.use('/api/users', userRouter);

app.use(errorHandler);

// Server Listener
app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`.rainbow.bold)
);

export default app;
