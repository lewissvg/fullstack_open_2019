import React from "react";
import ReactDOM from "react-dom";

const Header = props => <h1>{props.course.name}</h1>;

const Part = props => (
  <p>
    {props.part} {props.exercise}
  </p>
);

const Content = props => {
  const parts = () =>
    props.parts.map(part => (
      <Part key={part.id} part={part.name} exercise={part.exercises} />
    ));
  return parts();
};

const Course = props => {
  return (
    <div>
      <Header course={props.course} />
      <Content parts={props.course.parts} />
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4
      }
    ]
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
