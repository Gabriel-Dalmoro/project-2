import React, { useEffect as useMyEffect, useState } from 'react';

function Weather() {
  const [data, setData] = useState({});

  const getCurrentWeather = async () => {
    console.log('hello from getCurrentTime');
    try {
      let response = await fetch('http://localhost:5001/weather');
      let values = await response.json();
      console.log(values);
      setData(values);
    } catch (ex) {
      console.log(ex);
    }
  };

  useMyEffect(() => {
    console.log('hello from useEffect');
    const id = setInterval(() => {
      console.log('hello from interval');
      getCurrentWeather();
    }, 500);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="app">
      <div className="location">
        <p>{data.location}</p>
      </div>
      <div className="container">
        <div className="top">
          <div className="temp">
            {data.temperature ? <h1>{data.temperature}°C</h1> : null}
          </div>

          <div style={{ width: '0px' }}>
            <div className="description">
              <p>{data.conditions ? <h1>{data.conditions}</h1> : null}</p>
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
          <form action="" className="search-bar">
            <input type="text" placeholder="Search Activity..."></input>
          </form>
        </div>
        {data.location !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.feels_like ? (
                <p className="bold">{data.feels_like}°C</p>
              ) : null}

              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.humidity ? <p className="bold">{data.humidity}%</p> : null}

              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind_speed ? (
                <p className="bold">{data.wind_speed} km/h</p>
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
