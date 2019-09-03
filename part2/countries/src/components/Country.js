import React from "react";

const Country = props => {
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
    </>
  );
};

export default Country;
