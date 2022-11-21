import React from 'react';
import ActivityCards from './ActivityCards.jsx';
import activities from '../activities.js';

function Body(props) {
  return (
    <div className="mainBody">
      {/* <p id="subtitle">What would you like to do today?</p> */}
      {activities.map(activityItem => (
        <ActivityCards
          name={activityItem.name}
          maxTemp={activityItem.maxTemp}
          minTemp={activityItem.minTemp}
          wind={activityItem.maxWind}
        />
      ))}
    </div>
  );
}

export default Body;
