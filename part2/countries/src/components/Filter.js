import React from "react";
import Country from "./Country";

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
      <div key={country.name}>{country.name}</div>
    ));
  } else {
    return <div>Too many matches, specify another filter</div>;
  }
};

export default Filter;
