import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = props => <h1>{props.text}</h1>;

const Button = props => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = props => {
  const doCalc = type => {
    const total = props.good + props.neutral + props.bad;
    if (type === "total") {
      return total;
    } else if (type === "average") {
      return (props.good - props.bad) / total;
    } else {
      return (props.good / total) * 100;
    }
  };
  return (
    <p>
      good {props.good} <br />
      neutral {props.neutral} <br />
      bad {props.bad} <br />
      total {doCalc("total")} <br />
      average {doCalc("average")} <br />
      positive {doCalc("positive")}%
    </p>
  );
};

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
