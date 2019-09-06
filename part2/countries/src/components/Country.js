import React, { useEffect, useState } from "react";
import axios from "axios";

const Country = props => {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.apixu.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${props.country.capital}`
      )
      .then(response => {
        setWeather(response.data);
      });
  }, []);

  return (
    <>
      <div>
        <h1>{props.country.name}</h1>
      </div>{" "}
      <div>capital: {props.country.capital}</div>
      <div>population: {props.country.population}</div>
      <div>
        <h2>languages</h2>
        <ul>
          {props.country.languages.map(language => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <img src={props.country.flag} height="100" alt="flag" />
      </div>
      <div>
        <h2>Weather in {props.country.capital}</h2>
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
