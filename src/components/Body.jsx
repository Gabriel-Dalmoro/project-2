import React from 'react'
import ActivityCards from './ActivityCards.jsx'
import WeatherWidget from './WeatherWidget.jsx'

function Body() {
  return (
    <div className="mainBody">
        <WeatherWidget />
        <ActivityCards />
    </div>
  )
}

export default Body