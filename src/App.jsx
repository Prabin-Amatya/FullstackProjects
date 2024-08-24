import { useState, useEffect } from "react";
import personService from "./Services/personService"
import Contacts from "./Components/Contacts"
import Form from "./Components/Form"
import Search from "./Components/Search"


const App = () => {
  debugger
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "", id: 0 });
  const [searchTerm, setSearchTerm] = useState("");

  const hook = () =>
    {
      debugger
      personService
        .GetAll()
        .then(initPersons=>
          setPersons(initPersons)
        )
    }

  useEffect(hook,[])

  const handleNameChange = (event) => {
    setNewPerson({ ...newPerson, name: event.target.value });
  };

  const handlePhoneChange = (event) => {
    setNewPerson({ ...newPerson, number: event.target.value });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const removePerson = (id) =>
  {
    personService
    .Delete(id)
    .then(
      DeletedPerson =>
      {
          setPersons(persons.filter(person=>{if(person.id != DeletedPerson.id)
                return(person)}))
      }
    )
  } 

  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name === newPerson.name)) {
      debugger
      let updated_person = persons.find(person=>person.name == newPerson.name)
      updated_person.number = newPerson.number
      personService
      .Update(updated_person.id, updated_person)
      .then((returnedPerson)=>
        setPersons(persons.map(person=>(person.id == returnedPerson.id)? returnedPerson : person))
      )
      
    } 
    else {
      debugger
      console.log(persons.map(p => p.id))
      const newId = persons.length ? (persons.length + 1).toString(): "1";
      personService
      .Create({...newPerson, id:newId})
      setPersons([...persons, { ...newPerson, id: newId }]);
      setNewPerson({ name: "", number: "", id: 0 });
    }
  };

  const filteredPersons = 
      persons.filter(person =>
      person.name.toLowerCase().includes(searchTerm))

  return (
    <div>
      <Search onSearch={handleSearch} />

      <Form 
        onSubmit={handleSubmit}
        onNameChange={handleNameChange}
        onPhoneChange={handlePhoneChange}
        newPerson={newPerson}
      />

      <Contacts persons={filteredPersons()} removePerson={removePerson}/>
    </div>
  );
};

export default App;
