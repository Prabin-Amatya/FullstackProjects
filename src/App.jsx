import { useState } from "react";
import Contacts from "./Components/Contacts"
import Form from "./Components/Form"
import Search from "./Components/Search"


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
    { name: 'Jayash Basnet', number: '39-23-6423122', id: 5 }
  ]);

  const [newPerson, setNewPerson] = useState({ name: "", number: "", id: 0 });
  const [searchTerm, setSearchTerm] = useState("");

  const handleNameChange = (event) => {
    setNewPerson({ ...newPerson, name: event.target.value });
  };

  const handlePhoneChange = (event) => {
    setNewPerson({ ...newPerson, number: event.target.value });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name === newPerson.name)) {
      alert("Contact Already Exists");
    } else {
      const newId = persons.length ? Math.max(persons.map(p => p.id)) + 1 : 1;
      setPersons([...persons, { ...newPerson, id: newId }]);
      setNewPerson({ name: "", number: "", id: 0 });
    }
  };

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <Search onSearch={handleSearch} />

      <Form 
        onSubmit={handleSubmit}
        onNameChange={handleNameChange}
        onPhoneChange={handlePhoneChange}
        newPerson={newPerson}
      />
      <Contacts persons={filteredPersons} />
    </div>
  );
};

export default App;
