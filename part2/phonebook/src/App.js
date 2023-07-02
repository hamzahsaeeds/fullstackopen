import { useEffect, useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
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
      return;
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

  const getPersonsFromJSONServer = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }

  useEffect(() => {
    getPersonsFromJSONServer();
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearchChange={handleSearchChange} />
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNewNameChange={handleNewNameChange}
        handleNewNumberChange={handleNewNumberChange}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
