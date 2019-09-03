import React, { useState, useEffect } from "react";
import axios from "axios";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  //get initial state from server
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then(response => {
      setPersons(response.data);
    });
  }, []);

  const addPerson = e => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newPhone
    };
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else if (persons.find(person => person.number === newPhone)) {
      alert(`${newPhone} already exists in the phonebook`);
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewPhone("");
    }
  };

  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  const handlePhoneChange = e => {
    setNewPhone(e.target.value);
  };

  const handleFilterChange = e => {
    setPersons(
      persons.filter(person =>
        person.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
