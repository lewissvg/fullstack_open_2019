import React from "react";

const CountryLine = props => {
  return (
    <div>
      {props.name}
      <button name={props.country.name} onClick={props.showPressed}>
        show
      </button>
    </div>
  );
};

export default CountryLine;
