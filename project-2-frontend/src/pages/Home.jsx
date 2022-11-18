import React from 'react';

import Body from '../components/Body.jsx';
import Footer from '../components/Footer.jsx';
import Head from '../components/Head.jsx';

import Weather from '../components/Weather.jsx';

const Home = () => {
  return (
    <div>
      <Head />
      <Weather />

      <Body />
      <Footer />
    </div>
  );
};

export default Home;
