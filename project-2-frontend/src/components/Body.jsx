import React from 'react';
import activities from '../activities.js';
import MUIcards from './MUIcards.jsx';

function Body({weatherData}) {
    // if (weatherData.temperature > activityItem.minTemp) {
     

  return (
    <div className="mainBody">
      {activities.map(activityItem => (
        <MUIcards
          key={activityItem.id}
          name={activityItem.name}
          season={activityItem.season}
          minParticipant={activityItem.minParticipant}
          maxTemp={activityItem.maxTemp}
          minTemp={activityItem.minTemp}
          wind={activityItem.maxWind}
        />
      ))}
    </div>
  );
}

export default Body;
