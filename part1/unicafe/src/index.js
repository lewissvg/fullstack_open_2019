import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = props => <h1>{props.text}</h1>;

const Button = props => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickHandler = (name, newValue) => {
    if (name === "good") {
      setGood(newValue);
    } else if (name === "neutral") {
      setNeutral(newValue);
    } else {
      setBad(newValue);
    }
  };

  return (
    <>
      <Header text="give feedback" />
      <Button handleClick={() => clickHandler("good", good + 1)} text="good" />
      <Button
        handleClick={() => clickHandler("neutral", neutral + 1)}
        text="neutral"
      />
      <Button handleClick={() => clickHandler("bad", bad + 1)} text="bad" />
      <Header text="statistics" />
      <p>
        good {good} <br />
        neutral {neutral} <br />
        bad {bad} <br />
      </p>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
