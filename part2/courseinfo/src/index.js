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
      <Total parts={props.course.parts} />
    </div>
  );
};

const Total = props => {
  const total = props.parts.reduce((sum, part) => sum + part.exercises, 0);
  return <b>total of {total} exercisess</b>;
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  const courseComponents = () =>
    courses.map(course => <Course key={course.id} course={course} />);

  return courseComponents();
};

ReactDOM.render(<App />, document.getElementById("root"));
