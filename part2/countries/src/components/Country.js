import React, { useEffect, useState } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.apixu.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${country.capital}`
      )
      .then(response => {
        setWeather(response.data);
      });
  }, [country]);

  return (
    <>
      <div>
        <h1>{country.name}</h1>
      </div>{" "}
      <div>capital: {country.capital}</div>
      <div>population: {country.population}</div>
      <div>
        <h2>languages</h2>
        <ul>
          {country.languages.map(language => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <img src={country.flag} height="100" alt="flag" />
      </div>
      <div>
        <h2>Weather in {country.capital}</h2>
        <b>temperature: </b>
        {weather.current && weather.current.temp_c} Celcius
        <div>
          <img
            src={weather.current && weather.current.condition.icon}
            height="50"
            alt="weather-icon"
          />
        </div>
        <div>
          <b>wind: </b> {weather.current && weather.current.wind_kph} kph
          direction {weather.current && weather.current.wind_dir}
        </div>
      </div>
    </>
  );
};

export default Country;
