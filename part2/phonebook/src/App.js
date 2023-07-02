import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const isNameExists = (newEntry) => {
    return persons.find((person) => person.name === newEntry);
  };

  const handleNewNameChange = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };

  const handleNewNumberChange = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    event.preventDefault();
    const searchQuery = event.target.value.toLowerCase();
  
    if (searchQuery === "") {
      setPersons([
        { name: "Arto Hellas", number: "040-123456", id: 1 },
        { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
        { name: "Dan Abramov", number: "12-43-234345", id: 3 },
        { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
      ]);
    } else {
      const searchedPeople = persons.filter((person) =>
        person.name.toLowerCase().includes(searchQuery)
      );
      setPersons(searchedPeople);
    }
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isNameExists(newName)) {
      setPersons((prevState) => [
        ...prevState,
        { name: newName, number: newNumber },
      ]);
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with:{" "}
        <input onChange={(event) => handleSearchChange(event)} />
      </div>
      <h2>add a new</h2>
      <form>
        <div>
          name:{" "}
          <input
            value={newName}
            onChange={(event) => handleNewNameChange(event)}
          />
        </div>
        <div>
          number:{" "}
          <input
            value={newNumber}
            onChange={(event) => handleNewNumberChange(event)}
          />
        </div>
        <div>
          <button type="submit" onClick={(event) => handleSubmit(event)}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
