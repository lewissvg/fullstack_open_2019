import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filtered, setFiltered] = useState(persons);

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
    setFiltered(
      persons.filter(person =>
        person.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={handleFilterChange} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          number <input onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filtered.map(person => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;
