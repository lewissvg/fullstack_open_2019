import React from "react";
import Country from "./Country";
import CountryLine from "./CountryLine";

const Filter = props => {
  if (props.filtered.length === 1) {
    return (
      <Country
        key={props.filtered[0].numericCode}
        country={props.filtered[0]}
      />
    );
  } else if (props.filtered.length <= 10) {
    return props.filtered.map(country => (
      <CountryLine
        key={country.name}
        name={country.name}
        showPressed={props.showPressed}
        country={country}
      />
    ));
  } else {
    return <div>Too many matches, specify another filter</div>;
  }
};

export default Filter;
