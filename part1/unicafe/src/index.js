import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = props => <h1>{props.text}</h1>;

const Button = props => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistic = props => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
};

const Statistics = props => {
  const total = props.good + props.neutral + props.bad;

  const doCalc = type => {
    if (type === "total") {
      return total;
    } else if (type === "average") {
      return (props.good - props.bad) / total;
    } else {
      return (props.good / total) * 100 + "%";
    }
  };
  if (total > 0) {
    return (
      <div>
        <Statistic text="good" value={props.good} />
        <Statistic text="neutral" value={props.neutral} />
        <Statistic text="bad" value={props.bad} />
        <Statistic text="total" value={doCalc("total")} />
        <Statistic text="average" value={doCalc("average")} />
        <Statistic text="positive" value={doCalc("positive")} />
      </div>
    );
  } else {
    return <p>No feedback given</p>;
  }
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
