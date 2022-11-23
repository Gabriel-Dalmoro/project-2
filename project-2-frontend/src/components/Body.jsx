import React from 'react';
import activities from '../activities.js';
import MUIcards from './MUIcards.jsx';

<<<<<<< HEAD
function Body({ weatherData }) {
  // if (weatherData.temperature > activityItem.minTemp) {

  return (
    <div className="mainBody">
      {activities.map(activityItem => (
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

=======
function Body({weatherData}) {
  const filteredActivities = activities.filter(el => el.minTemp <= 20);
  
      return (
        <div className="mainBody">
          <div className="filteredCards">
            {filteredActivities.map(activityItem => (
              <MUIcards
                key={activityItem.id}
                name={activityItem.name}
                season={activityItem.season}
                maxTemp={activityItem.maxTemp}
                minTemp={activityItem.minTemp}
                wind={activityItem.maxWind}
                url={activityItem.url}
              />
            ))}
          </div>
        </div>
      );
    }
>>>>>>> fee6b1862ed0e2312e81eba8d052e8240e45d927
export default Body;
