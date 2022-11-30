import React from 'react';
import SearchBar from './SearchBar';

function Weather({weatherData}) {
  return (
    <div className="app">
      <div className="location">
        <p>{weatherData.location}</p>
      </div>
      <div className="container">
        <div className="top">
          <div className="temp">
            {weatherData.temperature ? <h1>{weatherData.temperature}°C</h1> : null}
          </div>

          <div style={{ width: '0px' }}>
            <div className="description">
              <p>{weatherData.conditions ? <h1>{weatherData.conditions}</h1> : null}</p>
            </div>
          </div>
        </div>
        <div className="title">What activity will you like to do today?</div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            width: '100%',
            height: '100%',
          }}
        >
          <SearchBar/>
        </div>
        {weatherData.location !== undefined && (
          <div className="bottom">
            <div className="feels">
              {weatherData.feels_like ? (
                <p className="bold">{weatherData.feels_like}°C</p>
              ) : null}

              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {weatherData.humidity ? <p className="bold">{weatherData.humidity}%</p> : null}

              <p>Humidity</p>
            </div>
            <div className="wind">
              {weatherData.wind_speed ? (
                <p className="bold">{weatherData.wind_speed} km/h</p>
              ) : null}

              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
