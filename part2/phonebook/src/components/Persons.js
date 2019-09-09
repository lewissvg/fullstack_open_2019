import React from "react";
import Person from "./Person";

const Persons = ({ persons, handleDelete }) => {
  return persons.map(person => (
    <Person
      key={person.id}
      name={person.name}
      number={person.number}
      handleDelete={() => handleDelete(person.id)}
    />
  ));
};

export default Persons;
