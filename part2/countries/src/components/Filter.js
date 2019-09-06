import React from "react";
import Country from "./Country";
import CountryLine from "./CountryLine";

const Filter = ({ filtered, showPressed }) => {
  if (filtered.length === 1) {
    return <Country key={filtered[0].numericCode} country={filtered[0]} />;
  } else if (filtered.length <= 10) {
    return filtered.map(country => (
      <CountryLine
        key={country.name}
        name={country.name}
        showPressed={showPressed}
        country={country}
      />
    ));
  } else {
    return <div>Too many matches, specify another filter</div>;
  }
};

export default Filter;
