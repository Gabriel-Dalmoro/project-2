import React from 'react'
import ActivityCards from './ActivityCards.jsx'
import WeatherWidget from './WeatherWidget.jsx'

function Body() {
  return (
    <div>
    <nav>
      <div className="menu">
        <div className="logo">
          <a href="#">Funactive</a>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#login">Login</a></li>
          <li><a href="#search">Search</a></li>
        </ul>
      </div>
    </nav>
    <div className="img" />
    <div className="center">
      <div className="title">What activity will you like to do today?</div>
      <div className = "search bar"/>
        <input type = "text" placeholder = "" size = "100"/>
    </div>
  </div>
  )
};


export default Body