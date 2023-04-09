import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import userRouter from './routes/userRoutes.js';
import errorHandler from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import getWeather from './utils/getWeather.js';
import dotenv from 'dotenv';

dotenv.config();

// Server port
const PORT = process.env.PORT || 5001;

// Connect to MongoDB database
connectDB();

// Express Server setup
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable Express server to respond to preflight requests
app.use(cors());

app.use(helmet());

app.use((req, res, next) => {
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
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.rainbow.bold);
});
