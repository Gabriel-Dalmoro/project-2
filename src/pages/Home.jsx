import React from 'react'
import ActivityCards from '../components/ActivityCards.jsx';
import Body from '../components/Body.jsx';
import Head from '../components/Head.jsx';
import WeatherWidget from '../components/WeatherWidget.jsx';

const Home = () => {
  return (
    <div>
    <Head />
    <WeatherWidget />
    <ActivityCards />
    <Body />
    </div>
)
}

export default Home