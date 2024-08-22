const Contacts = ({ persons }) => (
    <div>
      <h3>Phone Book</h3>
      <table>
        <tbody>
          {persons.map(person => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
export default Contacts