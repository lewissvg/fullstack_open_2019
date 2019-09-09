import React, { useState, useEffect } from "react";
import personService from "./services/People";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  //get initial state from server
  useEffect(() => {
    personService.getAll().then(response => {
      setPersons(response);
    });
  }, []);

  const addPerson = e => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newPhone
    };
    if (persons.find(person => person.name === newName)) {
      if (
        window.confirm(
          `${newName} already added to phonebook, replace old number with new one?`
        )
      ) {
        const person = persons.find(person => person.name === newName);
        personService.update(person.id, personObject).then(() => {
          personService.getAll().then(response => {
            setPersons(response);
          });
        });
      }
    } else if (persons.find(person => person.number === newPhone)) {
      alert(`${newPhone} already exists in the phonebook`);
    } else {
      personService.create(personObject).then(response => {
        setPersons(persons.concat(response));
        setNewName("");
        setNewPhone("");
      });
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

  const handleDelete = id => {
    const person = persons.find(person => person.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.deletePerson(id).then(() => {
        personService.getAll().then(response => {
          setPersons(response);
        });
      });
    }
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
      <Persons persons={persons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
