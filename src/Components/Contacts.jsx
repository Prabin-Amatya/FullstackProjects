

const Contacts = ({persons, removePerson}) => 
{
  debugger
  if(persons.length!=0){
    return (
      <div>
        <h3>Phone Book</h3>
        <table>
        
          <tbody>
            
            {persons.map(person => (
              <tr key={person.id}>
                <td>{person.name}</td>
                <td>{person.number}</td>
                <td>
                  <button onClick={() => removePerson(person.id)}>Delete</button>
                </td>
              </tr>
            ))}

          </tbody>
        
        </table>
      </div>
    )
  }
  else
    return(
      <div>
        <h3>Phone Book</h3>
        <h2>Empty</h2>
      </div>
    )
      
}
  
  
export default Contacts