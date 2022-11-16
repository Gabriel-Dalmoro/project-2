import React from 'react'
import ActivityCards from './ActivityCards.jsx'
import WeatherWidget from './WeatherWidget.jsx'

function Body() {
  return (
    <div className="mainBody">
      <p id='subtitle'>
        What would you like to do today?
      </p>
        <WeatherWidget />
        <ActivityCards />
    </div>
  )
}

export default Body