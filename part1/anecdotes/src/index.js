import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = props => <h1>{props.text}</h1>;

const Button = props => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = props => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    new Array(6 + 1)
      .join("0")
      .split("")
      .map(parseFloat)
  ); //empty array of six 0's [0, 0, 0, 0, 0, 0]

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleNext = () => {
    const pos = randomIntFromInterval(0, 5);
    setSelected(pos);
  };

  const handleVote = () => {
    console.log(votes);
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  const findHighest = () => {
    return votes.indexOf(Math.max.apply(Math, votes));
  };

  return (
    <>
      <Header text="Anecdote of the day" />
      <div>{props.anecdotes[selected]}</div>
      has {votes[selected]} votes
      <div>
        <Button handleClick={() => handleVote()} text="vote" />
        <Button handleClick={() => handleNext()} text="next anecdote" />
      </div>
      <div>
        <Header text="Anecdote with most votes" />
      </div>
      <div>{props.anecdotes[findHighest()]}</div>
      has {votes[findHighest()]} votes
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
