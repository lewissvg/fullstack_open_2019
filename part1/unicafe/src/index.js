import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = props => <button>{props.text}</button>;

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return <Button text="good" />;
};

ReactDOM.render(<App />, document.getElementById("root"));
