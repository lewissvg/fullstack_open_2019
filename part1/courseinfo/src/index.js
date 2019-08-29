import React from "react";
import ReactDOM from "react-dom";

const Header = props => <h1>{props.course.name}</h1>;

const Part = props => (
  <p>
    {props.part} {props.exercise}
  </p>
);

const Content = props => {
  console.log(props);
  return (
    <>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
    </>
  );
};

const Total = props => {
  const total =
    props.total[0].exercises +
    props.total[1].exercises +
    props.total[2].exercises;
  return <p>Number of exercises: {total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
