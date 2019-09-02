import React from "react";

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

const Total = props => {
  const total = props.parts.reduce((sum, part) => sum + part.exercises, 0);
  return <b>total of {total} exercisess</b>;
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

export default Course;
