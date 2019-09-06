import React from "react";

const CountryLine = ({ name, country, showPressed }) => {
  return (
    <div>
      {name}
      <button name={country.name} onClick={showPressed}>
        show
      </button>
    </div>
  );
};

export default CountryLine;
