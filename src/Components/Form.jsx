const Form = ({ onSubmit, onNameChange, onPhoneChange, newPerson }) => (
    <form onSubmit={onSubmit}>
      <label>Name:</label>
      <input value={newPerson.name} onChange={onNameChange} />
      <label>Phone Number:</label>
      <input value={newPerson.number} onChange={onPhoneChange} />
      <input type="submit" />
    </form>
  );
    
export default Form