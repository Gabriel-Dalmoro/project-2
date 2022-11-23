import React from 'react';
import activities from '../activities.js';
import MUIcards from './MUIcards.jsx';

function Body({weatherData}) {
  const filteredActivities = activities.filter(el => el.minTemp < weatherData.temperature);
  
  for (let i = 0; i < activities.length; i++){
    if (weatherData.temperature > activities[i].minTemp) {
      return (
        <div className="mainBody">
          {filteredActivities.map(activityItem => (
            <MUIcards
              key={activityItem.id}
              name={activityItem.name}
              season={activityItem.season}
              maxTemp={activityItem.maxTemp}
              minTemp={activityItem.minTemp}
              wind={activityItem.maxWind}
            />
          ))}
        </div>
      );
    }
  }
}
export default Body;
