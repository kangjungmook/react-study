import React, { useState } from 'react';

function WeatherAPI() {
  const [city, setCity] = useState(" ");
  const [weatherData, setWeatherData] = useState();
  const [error, setError] = useState();

  const handleInputChange = (e) => {
    setCity(e.target.value);
  }

  const fetchWeatherData = async () => {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ef4b4b6bbamsh1ed62550e8f038dp1a4e25jsn5baa0279374e',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error('날씨 데이터를 가져오지 못했습니다.');
      }

      const result = await response.json();
      setWeatherData(result);
      setError(null);
    } catch (err) {
      setWeatherData(null);
      setError(err.message);
    }
  }

  return (
    <div className="WeatherAPI">
      <h1>날씨 앱</h1>
      <input
        type="text"
        placeholder="도시를 입력하세요(영어로)"
        value={city}
        onChange={handleInputChange}
      />
      <button onClick={fetchWeatherData}>날씨 정보 확인</button>

      {error && <p>{error}</p>}

      {weatherData && (
        <div>
          <img
            src={weatherData.current.condition.icon}
            alt=""
          />
          <h2>{weatherData.location.name}</h2>
          <p>Temperature: {weatherData.current.temp_c} °C</p>
          <p>Weather: {weatherData.current.condition.text}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherAPI;
