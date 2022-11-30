import React from 'react';
import activities from '../activities.js';
import MUIcards from './MUIcards.jsx';

function Body({ weatherData }) {
  const filteredActivities = activities.filter(el => el.minTemp <= 20);

  return (
    <div className="mainBody">
      <h1 className='weatherRecTitle'>Based on the weather, these activities are recommended:</h1>
      <div className="filteredCards">
        {filteredActivities.map(activityItem => (
          <MUIcards
            key={activityItem.id}
            name={activityItem.name}
            season={activityItem.season}
            maxTemp={activityItem.maxTemp}
            minTemp={activityItem.minTemp}
            wind={activityItem.maxWind}
            icon={activityItem.icon}
            url={activityItem.url}
          />
        ))}
      </div>
    </div>
  );
}
export default Body;
